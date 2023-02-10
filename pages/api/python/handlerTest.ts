import { NextApiRequest, NextApiResponse } from "next";
import runPythonScript from "./pythonRunner";

// These lines are a hack to get Vercel to deploy the python scripts
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const file = fs.readFileSync(
    path.join(process.cwd(), "pages/api/python", "test.py"),
  );
  const dir = path.resolve("./pages/api/python");
  const policyFiles = fs.readdirSync(
    dir,
    // path.join(process.cwd(), "pages/api/python"),
    // path.join(process.cwd(), ".next/server/pages/api/python"),
  );
  console.log(policyFiles);

  const response = await runPythonScript("test.py");
  return res.json({ response });
}
