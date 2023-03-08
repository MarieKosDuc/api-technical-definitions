const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const definitions = require("./definitions.json");

// Allow cross origin requests
app.use(
  cors({
    origin: "*",
  })
);

// API "homepage"
app.get("/", (req, res) => {
  res.send(
    'Toutes les définitions : <a href="./alldefinitions">/alldefinitions</a> <br> Une définition au hasard : <a href="./definition">/definition</a> <br> Une définition avec son ID : /definition/:id'
  );
});

// route to get all definitions
app.get("/alldefinitions", (req, res) => {
  res.status(200).json(definitions);
});

// route to get a random definition
app.get("/definition", (req, res) => {
  const randomId = definitions[Math.floor(Math.random() * definitions.length)];
  res.status(200).json(randomId);
});

// route to get a definition by id
app.get("/definition/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const definitions = definitions.find((definitions) => definitions.id === id);
  res.status(200).json(parking);
});

// route to create a new definition
app.post("/createdefinition/", (req, res) => {
  definitions.push(req.body);
  res.status(200).json(definitions);
});

app.listen(port, () => console.log("Serveur à l'écoute"));

module.exports = app;
