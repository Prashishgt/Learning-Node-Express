const { readFile, writeFile } = require("fs").promises;

// even less coding way is to define promises in import
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf-8");
    const second = await readFile("../content/second.txt", "utf-8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is awesome concept of async await in JS and \n${first} and \n${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// using resolve and reject from Promise obj
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//         return null;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
