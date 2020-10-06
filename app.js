const yargs = require("yargs");
const { argv } = require("yargs");
const notes = require("./notes");

yargs.version("1.1.O");

yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "content",
      demandOption: true,
      type: "string",
    },
  },
  handler() {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler() {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list a note",
  handler() {
    notes.listNote();
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// console.log(yargs.argv);

yargs.parse();
