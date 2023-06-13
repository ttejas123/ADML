const express = require("express");
// import clipboardy from 'clipboardy';
const app = express();
const port = 3000;

app.use(express.static("public"))
// Define your APIs
app.get('/1', (req, res) => {
  res.sendFile(__dirname + "/public" +"/1.html");
});

app.get('/2', (req, res) => {
  res.sendFile(__dirname + "/public" +"/2.html");
});

app.get('/3', (req, res) => {
  res.sendFile(__dirname + "/public" +"/3.html");
});

app.get('/4', (req, res) => {
  res.sendFile(__dirname + "/public" +"/4.html");
});

app.get('/5', (req, res) => {
  res.sendFile(__dirname + "/public" +"/5.html");
});

app.get('/6', (req, res) => {
  res.sendFile(__dirname + "/public" +"/6.html");
});

app.get('/7', (req, res) => {
  res.sendFile(__dirname + "/public" +"/7.html");
});

app.get('/8', (req, res) => {
  res.sendFile(__dirname + "/public" +"/8.html");
});

app.get('/9', (req, res) => {
  res.sendFile(__dirname + "/public" +"/9.html");
});

app.get('/10', (req, res) => {
  res.sendFile(__dirname + "/public" +"/10.html");
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});