const fs = require("fs");

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = function(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title != title);

    if(notes.length === notesToKeep.length) {
        console.log('Note not found.')
    } else {
        saveNotes(notesToKeep);
        console.log("Note deleted.")
    }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { addNote, removeNote };
