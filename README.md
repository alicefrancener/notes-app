# 📓 Note Application

Application run by command line to store and manage notes. 

Built using:
- Node.js 
- yargs
- chalk

## 🧰 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/alicefrancener/notes-app
   ```
2. Install dependencies
   ```bash
   yarn
   ```

## 💻 Usage

- To add a new note 
  ```bash
  node app.js add --title="Your Title" --body="Simple note!"
  ```
- To list all notes by title
  ```bash
  node app.js list
  ```
- To read a note
  ```bash
  node app.js read --title="Your Title"
  ```
- To remove a note
  ```bash
  node app.js remove --title="Your Title"
  ```
- To list all commands and get help
  ```bash
  node app.js --help
  ```
- OBS:
  - All notes will be stored at `notes.json` file
  - Note title is unique

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)
