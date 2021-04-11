const yargs = require("yargs");
const { addNote, removeNote, listNotes } = require("./notes");

yargs.command(
  "add",
  "Add a new note",
  (yargs) => {
    yargs
      .option("title", {
        describe: "Note title",
        string: true,
        demandOption: true,
      })
      .option("body", {
        describe: "Note body",
        string: true,
        demandOption: true,
      });
  },
  (argv) => addNote(argv.title, argv.body)
);

yargs.command(
  "remove",
  "Remove a note",
  (yargs) => {
    yargs.option("title", {
      describe: "Note title",
      string: true,
      demandOption: true,
    });
  },
  (argv) => removeNote(argv.title)
);

yargs.command("list", "List all notes", () => listNotes());

yargs.command("read", "Read a specific note", () =>
  console.log("Reading a specific note...")
);

yargs.argv;
