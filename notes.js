const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title != title);

  if (notes.length === notesToKeep.length) {
    console.log(chalk.red.inverse("Note not found!"));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.red.inverse("There is no notes."));
  } else {
    console.log(chalk.inverse("Your notes:"));
    notes.forEach((note) => console.log("-", note.title));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes };
