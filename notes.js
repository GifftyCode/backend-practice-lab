// ============================================================
// LESSON 1 — File System: Reading, Writing & Managing Notes
// ============================================================
// GOAL: Build a simple note manager that saves notes to a
// .json file. No Express. No database. Just Node.js fs module.
// ============================================================

// STEP 1 — Import the modules you need.
// 'fs' is Node's built-in file system module.
// 'path' helps you build file paths that work on any OS.
// These are built into Node — no npm install needed.
const fs = require("fs");
const path = require("path");

// STEP 2 — Define where your data file lives.
// path.join() combines folder and filename into one safe path.
// __dirname means "the folder where THIS file is located."
// Think of dataFile as the "address" of your database file.
const dataFile = path.join(__dirname, "data", "notes.json");

// ============================================================
// HELPER FUNCTIONS — These are tools your main functions use
// ============================================================

// STEP 3 — Write a function called readNotes.
// Its job: open the JSON file and return the notes inside it.
// Use fs.readFileSync() to read the file.
// Use JSON.parse() to convert the raw text into a JS array.
// HINT: fs.readFileSync(dataFile, "utf-8") reads the file as text.
// Return the parsed array.
function readNotes() {
  // YOUR CODE HERE
}

// STEP 4 — Write a function called writeNotes.
// It receives one argument: an array of notes.
// Its job: save that array into the JSON file.
// Use JSON.stringify() to convert the array to text first.
// Pass null, 2 as extra arguments to make it readable/formatted.
// Use fs.writeFileSync() to save it.
// HINT: fs.writeFileSync(dataFile, JSON.stringify(notes, null, 2))
function writeNotes(notes) {
  // YOUR CODE HERE
}

// ============================================================
// MAIN FUNCTIONS — The actual features of your note app
// ============================================================

// STEP 5 — Write a function called addNote.
// It receives: title (string) and body (string).
// Steps to complete it:
//   a) Call readNotes() to get the current list of notes.
//   b) Create a new note object with these fields:
//        - id: Date.now() — this gives a unique number timestamp
//        - title: the title argument
//        - body: the body argument
//        - createdAt: new Date().toISOString() — current time as text
//   c) Push the new note into the notes array.
//   d) Call writeNotes() to save the updated array.
//   e) console.log a success message showing the note title.
function addNote(title, body) {
  // YOUR CODE HERE
}

// STEP 6 — Write a function called listNotes.
// No arguments needed.
// Steps:
//   a) Call readNotes() to get all notes.
//   b) If the array is empty, log "No notes found." and return.
//   c) Otherwise, loop through the notes and log each one like:
//      [1234567890] My Note Title — This is the body text
//   HINT: use notes.forEach() or a for loop
function listNotes() {
  // YOUR CODE HERE
}

// STEP 7 — Write a function called deleteNote.
// It receives: id (a number or string — the note's unique id).
// Steps:
//   a) Call readNotes() to get all notes.
//   b) Filter out the note whose id matches the given id.
//      HINT: notes.filter(note => note.id !== Number(id))
//   c) If the length didn't change, log "Note not found."
//   d) Otherwise, call writeNotes() with the filtered array.
//   e) Log a success message.
function deleteNote(id) {
  // YOUR CODE HERE
}

// ============================================================
// STEP 8 — TEST YOUR FUNCTIONS
// Uncomment these one at a time to test each feature.
// Watch what happens in your terminal each time.
// ============================================================

// addNote("My First Note", "This is the body of my first note.");
// addNote("Shopping List", "Bread, Eggs, Milk, Butter.");
// listNotes();
// deleteNote(PASTE_AN_ID_FROM_YOUR_JSON_FILE_HERE);
// listNotes();
