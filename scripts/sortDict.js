const fs = require("fs");

process.chdir(__dirname);

console.log("Reading dictionary.txt");
let dictionary = fs.readFileSync("../shared/dictionary/dictionary.txt", { encoding: "UTF8" })
                    .replace("\r", "").split("\n");

let ocDictionary = fs.readFileSync("../shared/dictionary/opencorekeys.txt", { encoding: "UTF8" })
                     .replace("\r", "").split("\n");

dictionary = dictionary.filter(string => string != "");
ocDictionary = ocDictionary.filter(string => string != "");

dictionary = dictionary.filter((string, index) => dictionary.indexOf(string) == index);
ocDictionary = ocDictionary.filter((string, index) => ocDictionary.indexOf(string) == index);

dictionary = dictionary.filter(string => !ocDictionary.includes(string));

console.log("Sorting...");
dictionary.sort();
ocDictionary.sort();

console.log("Writing dictionary.txt");
fs.writeFileSync("../shared/dictionary/dictionary.txt", dictionary.join("\n"));
fs.writeFileSync("../shared/dictionary/opencorekeys.txt", ocDictionary.join("\n"));
