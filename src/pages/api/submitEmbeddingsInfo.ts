import { VercelRequest, VercelResponse } from "@vercel/node";
import supabaseClient from 'lib/supabaseClient'

const submitEmbeddingsInfo = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const { userId, userName, embeddingsName, modelUsed, license } = req.body;

    try {
      const { data, error } = await supabaseClient
        .from("embeddings_information")
        .insert([
          {
            user_id: userId,
            user_name: userName,
            embeddings_name: embeddingsName,
            model_used: modelUsed,
            license: license,
          },
        ]);

      if (error) throw error;

      res.status(200).json({ message: "Embedding information submitted successfully." });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
};

export default submitEmbeddingsInfo;
