import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Locally an empty object will pick up credentials from the env but on Vercel we need to pass them in
  const s3Client = new S3Client({
    region: process.env.AWS_REGION || '',
        credentials:{
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
        }
  });

    const key = req.query.s3Key as string;
    const bucket = process.env.S3_BUCKET_NAME || '';

  if (!bucket.length) {
    return res.status(500).json({ error: 'S3_BUCKET_NAME not set' });
  }
  if (!key || !key.length) {
    return res.status(500).json({ error: 's3Key was not passed' });
  }

  try {
    // Create a command.
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    // Create a pre-signed URL.
    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 3600, // seconds
    });

    // Return the pre-signed URL.
    return res.status(200).json({ url });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
