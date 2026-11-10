const chalk = require("chalk");
const getNotes = require("./notes");

console.log(getNotes());

console.log(chalk.bgYellow.bold("Success"));
console.log(chalk.blue.bgRed.bold("Hello"));
