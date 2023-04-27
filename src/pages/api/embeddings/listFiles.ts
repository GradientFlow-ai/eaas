import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION || '',
        credentials:{
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
        }
  });
  const bucket = process.env.S3_BUCKET_NAME || '';

  if (!bucket.length) {
    res.status(500).json({ error: 'S3_BUCKET_NAME not set' });
    return;
  }

  try {
    const command = new ListObjectsV2Command({ Bucket: bucket });
    const data = await s3Client.send(command);
    const files = data.Contents?.map((file) => ({
      eTag: file.ETag, // Entity tag for the object, which is an MD5 hash of the object content
      key: file.Key,
      size: file.Size,
      lastModified: file.LastModified,
    }));

    res.status(200).json(files);
  } catch (error) {
    console.error('Error listing objects:', error);
    res.status(500).json({ error: 'Error listing objects' });
  }
}
