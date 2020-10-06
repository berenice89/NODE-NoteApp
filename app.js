const chalk = require("chalk");
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
  handler: function () {
    console.log(`Title : ${argv.title}.`);
    console.log(`Body : ${argv.body}`);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("remove a note");
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("read a note");
  },
});

yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    console.log("list a note");
  },
});

// console.log(yargs.argv);

yargs.parse();
