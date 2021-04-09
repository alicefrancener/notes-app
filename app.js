const yargs = require("yargs");
const {addNote} = require("./notes")

yargs
  .command(
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
  )
  .command("remove", "Remove a note", () => console.log("Removing a note..."))
  .command("list", "List all notes", () => console.log("Listing all notes..."))
  .command("read", "Read a specific note", () =>
    console.log("Reading a specific note...")
  ).argv;
