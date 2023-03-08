import { Configuration, OpenAIApi } from "openai";
import supabaseClient from "lib/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

async function generateEmbeddings(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY as string,
  });
  const openAI = new OpenAIApi(configuration);

  // const documents = await getDocuments(); // Your custom function to load docs
  const documents = [
    "oh that I might gaze upon thee as the dove falleth upon the gentle dew",
  ];

  let count = 0;

  // Assuming each document is a string
  for (const document of documents) {
    // OpenAI recommends replacing newlines with spaces for best results
    const input = document.replace(/\n/g, " ");

    const embeddingResponse = await openAI.createEmbedding({
      model: "text-embedding-ada-002",
      input,
    });

    const [{ embedding }] = embeddingResponse.data.data;

    // In production we should handle possible errors
    await supabaseClient.from("Documents").insert({
      content: document,
      embedding,
    });
    count++;
  }

  res.status(200).json({ count });
}

export default generateEmbeddings;
