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
  // get random category
  const randomCat = Math.floor(Math.random() * definitions.length);

  // get category index and title in the JSON
  let catIndex;
  let category;

  switch (randomCat) {
    case 0:
      catIndex = 0;
      category = "Paradigmes de programmation";
      break;
    case 1:
      catIndex = 1;
      category = "Langages de programmation";
      break;
  }

  // get random definition inside the category
  const randomDef = Math.floor(
    Math.random() * definitions[catIndex][category].length
  );

  const randomId = definitions[catIndex][category][randomDef];

  res.status(200).json(randomId);
});

app.listen(port, () => console.log(`Serveur à l'écoute sur le port ${port}`));

module.exports = app;
