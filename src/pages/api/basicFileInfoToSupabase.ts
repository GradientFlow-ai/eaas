import { NextApiRequest, NextApiResponse } from 'next';
import supabaseClient from 'lib/supabaseClient';

import { EmbeddingsFileInfo  } from "types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const fileInfo: EmbeddingsFileInfo = req.body

    const { data: user, error } = await supabaseClient
        .from('User')
        .select('id')
        .eq('email', fileInfo.userEmail)
        .single();

    if (error || !user) {
        console.log(error);
        return res.status(500).json({ error: 'Error finding user' });
    }

    const response = await supabaseClient
        .from('S3File')
        .insert([
            { userId: user.id, ...fileInfo }
        ]);

    const { data: file, error: fileError }  = response;
    if (fileError) {
     console.log(fileError);
     return res.status(500).json({ error: 'Error saving file info' });
    }

    return res.status(200).json({ success: true });
}
