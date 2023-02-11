import { PythonShell, Options } from "python-shell";
const cp = require("child_process");

const pythonShellWrapper = (script: string, options: Options) => {
  return new Promise((resolve, reject) => {
    PythonShell.run(script, options, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const pythonStringWrapper = (script: string, options: Options) => {
  return new Promise((resolve, reject) => {
    PythonShell.runString(script, undefined, function (err, results) {
      console.log(results);
      if (err) throw err;
      console.log("finished");
    });
  });
};
const findPythonPath = (pyVersion: string) => {
  return new Promise((resolve, reject) => {
    cp.exec(
      `whereis python`,
      { shell: "/bin/bash" },
      function (err: any, stdout: any, stderr: any) {
        if (err) {
          console.log(err);
          console.log(stderr);
        }
        resolve(stdout);
      },
    );
  });
};

const runPythonScript = async (script: string, args?: Options["args"]) => {
  const pyPath =  await findPythonPath('hm')
    console.log(pyPath)
  const options = {
    scriptPath: "pages/api/python/",
      pythonPath: "/usr/bin/python3"
  };
  // return pythonShellWrapper(script, options)
    return pythonStringWrapper(script, options)
    .then((results: any) => {
      const parsed = JSON.parse(results[0]);
      console.log(parsed);
      return parsed;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default runPythonScript;
