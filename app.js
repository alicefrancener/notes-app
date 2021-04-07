const yargs = require("yargs");

yargs
  .command("add", "Add a new note", () => console.log("Adding a new note..."))
  .command("remove", "Remove a note", () => console.log("Removing a note..."))
  .command("list", "List all notes", () => console.log("Listing all notes..."))
  .command("read", "Read a specific note", () =>
    console.log("Reading a specific note...")
  ).argv;
