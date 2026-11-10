// Importing nodejs core modules
// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'My name is Andrew.')

// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')

// Importing your own files:

// const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

//Importing NPM modules:

// const validator = require('validator')
// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isURL('https/mead.io'))

// const chalk = require("chalk");
// const getNotes = require("./notes");

// console.log(getNotes());

// console.log(chalk.bgYellow.bold("Success"));
// console.log(chalk.blue.bgRed.bold("Hello"));

// console.log(process.argv[2]);

// Using yargs to parse arguments
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

//Customize yargs version
yargs.version("1.1.0");

//Customizing yargs command
//Create add command:
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title + ". Body: " + argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});

//Create a list command
yargs.command({
  command: "list",
  describe: "List a note",
  handler: function () {
    console.log("Listing all notes");
  },
});

// Create a read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

// console.log(yargs.argv);
yargs.parse();
