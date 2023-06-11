const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000; // Change the port number as needed

app.get('/1', (req, res) => {
  const content = 'Content to copy to the clipboard'; // Replace with your desired content

  // Execute the appropriate command based on the operating system
  const command =
    process.platform === 'win32'
      ? `echo ${content} | clip`
      : `echo '${content}' | pbcopy`; // For macOS and Linux

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error copying to clipboard: ${error.message}`);
      res.status(500).send('Error copying to clipboard');
    } else {
      console.log('Content copied to clipboard!');
      res.send('Content copied to clipboard!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});