import { NextApiRequest, NextApiResponse } from 'next';
import supabaseClient from 'lib/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { data, error } = await supabaseClient
    .from('S3File')
    .select('*');

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

    // Don't return userEmail or userId
    const sanitizedData = data.map(({
        uuid,
        fileName,
        s3Key,
        description,
        embeddingsModel,
        embeddingsName,
        contributorName,
        license
    }) => {
    return {
        uuid,
        fileName,
        s3Key,
        description,
        embeddingsModel,
        embeddingsName,
        contributorName,
        license
    };
  });

  return res.status(200).json(data);
}
