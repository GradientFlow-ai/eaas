import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from "uuid";
import supabaseClient from 'lib/supabaseClient';

import { EmbeddingsFileInfo  } from "types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const fileInfo: EmbeddingsFileInfo = req.body

    // Get the user who is trying to make the update
    const { data: currentUser, error: currentError } = await supabaseClient
        .from('User')
        .select('id')
        .eq('email', fileInfo.userEmail)
        .single();

    if (currentError || !currentUser) {
        console.log(currentError);
        return res.status(500).json({ error: 'Error finding current user' });
    }

    if(!fileInfo.uuid) {
        return res.status(500).json({ error: 'No uuid provided' });
    }

    // Get the user who originally created the file
    const { data: originalFile, error: fileError } = await supabaseClient
        .from('S3File')
        .select('userId')
        .eq('uuid', fileInfo.uuid)
        .single();

    if (fileError || !originalFile) {
        console.log(fileError);
        return res.status(500).json({ error: 'Error finding original file' });
    }

    // Check if the current user is the same as the original user or if the current user is an admin
    if (currentUser.id !== originalFile.userId) {
        return res.status(403).json({ error: 'Not authorized to update this file' });
    }

    // If the check passes, proceed with the update
    const { error: updateError } = await supabaseClient
        .from('S3File')
        .update({ ...fileInfo })
        .eq('uuid', fileInfo.uuid);

    if (updateError) {
        console.log(updateError);
        return res.status(500).json({ error: 'Error updating file info' });
    }

    return res.status(200).json({ success: true });
}
