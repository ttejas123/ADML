const express = require("express");
const fs = require("fs");
const https = require("https")
// import clipboardy from 'clipboardy';
const app = express();
const port = 3000;

app.use(express.static("public"))

const options = {
  key: fs.readFileSync(__dirname + "/private.key"),
  cert: fs.readFileSync(__dirname + "/certificate.crt")
};
// Define your APIs
app.get('/p1/:id', (req, res) => {
  const id = req.params.id
  const content = fs.readFileSync(__dirname + "/public" +`/p1-${id}.txt`, 'utf-8');
  let basehtml = fs.readFileSync(__dirname + "/public" +`/Base.html`, 'utf-8');
  basehtml = basehtml.replace("<INSERT_CONTENT>", content)
  res.send(basehtml);
});

app.get('/p2/:id', (req, res) => {
  const id = req.params.id
  const content = fs.readFileSync(__dirname + "/public" +`/p2-${id}.txt`, 'utf-8');
  let basehtml = fs.readFileSync(__dirname + "/public" +`/Base.html`, 'utf-8');
  basehtml = basehtml.replace("<INSERT_CONTENT>", content)
  res.send(basehtml);
});

app.get('/p3/:id', (req, res) => {
  const id = req.params.id
  const content = fs.readFileSync(__dirname + "/public" +`/p3-${id}.txt`, 'utf-8');
  let basehtml = fs.readFileSync(__dirname + "/public" +`/Base.html`, 'utf-8');
  basehtml = basehtml.replace("<INSERT_CONTENT>", content)
  res.send(basehtml);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// https.createServer(options, app).listen(port, () => {
//   console.log(`HTTPS server is running on port ${port}`);
// });