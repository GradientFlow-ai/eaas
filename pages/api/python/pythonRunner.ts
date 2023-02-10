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

const pythonStringWrapper = (options: Options) => {
  return new Promise((resolve, reject) => {
    PythonShell.runString("x=1+1;print(x)", undefined, function (err, results) {
      console.log(results);
      if (err) throw err;
      console.log("finished");
    });
  });
};
const findPythonPath = (pyVersion: string) => {
  return new Promise((resolve, reject) => {
    cp.exec(
      `ls /usr/bin | grep python`,
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
  const pythonPath = await findPythonPath("python3");
  console.log(pythonPath);
  const options = {
    scriptPath: "pages/api/python/",
    pythonPath,
  };
  return "hello";
  // return pythonShellWrapper(script, options)
  //   .then((results: any) => {
  //     const parsed = JSON.parse(results[0]);
  //     console.log(parsed);
  //     return parsed;
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
};

export default runPythonScript;
