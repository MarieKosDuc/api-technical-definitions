const express = require("express");
const app = express();
const port = 3000;

const definitions = require("./definitions.json");

app.get("/", (req, res) => {
  res.send("Définitions : /alldefinitions");
});

app.get("/alldefinitions", (req, res) => {
  res.status(200).json(definitions);
});

app.get("/definition", (req, res) => {
  // To do : get a random definition
  const randomId = definitions[Math.floor(Math.random() * definitions.length)];
  res.status(200).json(randomId);
});

app.get("/definition/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const parking = definitions.find((definitions) => definitions.id === id);
  res.status(200).json(parking);
});

app.listen(port, () => console.log("Serveur à l'écoute"));
