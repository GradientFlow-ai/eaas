import { Configuration, OpenAIApi } from "openai";
import supabaseClient from "lib/supabaseClient";
import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// const makePrismaQueryString = (
//   queryEmbedding,
//   similarityThreshold,
//   matchCount,
// ) =>
//   prisma.$queryRawUnsafe`
// SELECT
// CAST ( ${queryEmbedding} AS VECTOR )
// id, content, ("Documents".embedding <=> ${queryEmbedding}) as similarity
// FROM "Documents"
// WHERE ("Documents".embedding <=> ${queryEmbedding}) > ${similarityThreshold}
// ORDER by "Documents".embedding <=> ${queryEmbedding}
// LIMIT ${matchCount}
// `;

async function searchEmbeddings(req: NextApiRequest, res: NextApiResponse) {
  // const { query } = req;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY as string,
  });
  const openAI = new OpenAIApi(configuration);

  const query =
    "oh that I might gaze upon thee as the dove falleth upon the gentle dew";
  let count = 0;

  const input = query.replace(/\n/g, " ");

  const embeddingResponse = await openAI.createEmbedding({
    model: "text-embedding-ada-002",
    input,
  });

  const [{ embedding }] = embeddingResponse.data.data;

  const results = await supabaseClient.rpc("match_documents", {
    query_embedding: embedding,
    similarity_threshold: 0.78, // Choose an appropriate threshold for your data
    match_count: 8, // Choose the number of matches
  });
  // const results = await supabaseClient.rpc("rank_documents", {
  //   query_embedding: embedding,
  // });

  res.status(200).json({ documents: results.data });
}

export default searchEmbeddings;
