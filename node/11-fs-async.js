const { readFile, watchFile, writeFile } = require("fs");

console.log("Start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }

  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result from async file handling module, ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return Null;
        }

        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting the new one");
