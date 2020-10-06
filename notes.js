const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  console.log("get notes...");
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === note);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    savedNotes(notes);
    console.log(chalk.green("new note added"));
  } else {
    console.log(chalk.red("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const noteToDelete = notes.filter((note) => {
    return note.title === title;
  });

  const noteIndex = notes.indexOf(noteToDelete);

  if (noteToDelete.length !== 0) {
    notes.splice(noteIndex, 1);
    console.log(noteToDelete);
    console.log(chalk.green("note removed"));
    savedNotes(notes);
  } else {
    console.log(chalk.red("this note doesnt exist"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes :"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("note not found"));
  }
};

const savedNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
