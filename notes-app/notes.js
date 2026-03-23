
const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "data", "notes.json");




function readNotes() {
    const note  = fs.readFileSync(dataFile, "utf-8")
    const parsedNote = JSON.parse(note)

    return parsedNote

}



function writeNotes(notes) {
 
  const stringNote = JSON.stringify(notes, null, 2 )
  fs.writeFileSync(dataFile, stringNote)

  return stringNote
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
 const notes = readNotes()
  const newNote = {
    id: Date.now(),
    title,
    body,
    createdAt: new Date().toISOString()
  }

notes.push(newNote)

writeNotes(notes)

console.log(`${title} added successfully`)
}

addNote("Shopping", "Buy groceries")

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