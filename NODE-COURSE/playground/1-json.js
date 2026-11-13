const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// Writing to a file:
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// Reading from a file:
// const dataRead = fs.readFileSync("1-json.json");
// const dataJSON = dataRead.toString();

// const data = JSON.parse(dataJSON);
// console.log(data.title);

//Challenge: work with JSON and the file system
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

((data.name = "Giffty"), (data.age = 54));

const userData = JSON.stringify(data);
fs.writeFileSync("1-json.json", userData);
