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

app.get("/", (req, res) => {
  res.send(
    'Toutes les définitions : <a href="./alldefinitions">/alldefinitions</a> <br> Une définition au hasard : <a href="./definition">/definition</a> <br> Une définition avec son ID : /definition/:id'
  );
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

module.exports = app;
