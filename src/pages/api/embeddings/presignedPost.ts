import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const s3Client = new S3Client({});

  const key = req.query.file || '';
  const bucket = process.env.S3_BUCKET_NAME || '';
  const contentType = req.query.fileType || '';

  if (!bucket.length) {
    res.status(500).json({ error: 'S3_BUCKET_NAME not set' });
    return;
  }
  if (!key.length) {
    res.status(500).json({ error: 'file not set' });
    return;
  }
  if (!contentType.length) {
    res.status(500).json({ error: 'fileType not set' });
    return;
  }

  const post = await createPresignedPost(s3Client, {
    Bucket: bucket,
    Key: key as string,
    Fields: {
      acl: 'public-read',
      'Content-Type': contentType as string,
    },
    Expires: 600, // seconds
    Conditions: [
      ['content-length-range', 0, 1048576000], // up to 1 GB
    ],
  });

  res.status(200).json(post);
}
