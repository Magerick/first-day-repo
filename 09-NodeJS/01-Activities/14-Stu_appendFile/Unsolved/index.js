// TODO: What are we importing?

// Files, specically .txt below.
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()

// Appends log.txt file and returns the 2nd line string of the file.
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works

  // Logs an error from the .txt file.
  // If there's an error, log the error with (err), if not, log "commit logged!".
  err ? console.error(err) : console.log('Commit logged!')
);

// spaghetti and meatballs is good