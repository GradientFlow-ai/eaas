import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const s3Client = new S3Client({});

  const post = await createPresignedPost(s3Client, {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: req.query.file,
    Fields: {
      acl: 'public-read',
      'Content-Type': req.query.fileType,
    },
    Expires: 600, // seconds
    Conditions: [
      ['content-length-range', 0, 1048576000], // up to 1 GB
    ],
  });

  res.status(200).json(post);
}
