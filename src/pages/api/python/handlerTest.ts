import { NextApiRequest, NextApiResponse } from "next";
import runPythonScript from "./pythonRunner";
import { microservicesApi } from "@/lib/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(microservicesApi);

  const data = await response.json();

  return res.json({ response: data });
}
