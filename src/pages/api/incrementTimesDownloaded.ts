import { NextApiRequest, NextApiResponse } from 'next';
import supabaseClient from 'lib/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { uuid } = req.body;

  if (!uuid) {
    return res.status(400).json({ error: 'No uuid provided' });
  }
    const { data, error: lookupError } = await supabaseClient
        .from('S3File')
        .select('timesDownloaded')
        .eq('uuid', uuid)
        .single();

      if (lookupError ) {
        throw lookupError;
      }

      const newCount = data.timesDownloaded + 1;

  const { error } = await supabaseClient
    .from('S3File')
    .update({ timesDownloaded: newCount })
    .eq('uuid', uuid);

  if (error) {
    console.error(error);
    return res.status(500).json({ error });
  }

  return res.status(200).json({ message: 'Successfully incremented download count' });
}
