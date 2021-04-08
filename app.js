const yargs = require("yargs");

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
    (argv) => console.log(`Title: ${argv.title}\nBody: ${argv.body}`)
  )
  .command("remove", "Remove a note", () => console.log("Removing a note..."))
  .command("list", "List all notes", () => console.log("Listing all notes..."))
  .command("read", "Read a specific note", () =>
    console.log("Reading a specific note...")
  ).argv;
