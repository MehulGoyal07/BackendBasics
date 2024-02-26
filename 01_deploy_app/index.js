require('dotenv').config()
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("mehuldotcom");
})

app.get('/login', (req, res) => {
    res.send("<h1>Revising Backend with Chai</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`);
});
