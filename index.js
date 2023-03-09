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
    '<h1>Bienvenue dans cette API de définitions techniques, basée sur les fiches "arbre" d\'<a href="https://adatechschool.fr/">Ada Tech School</a> !</h1>' +
      "Voici les routes pour retrouver : <ul>" +
      '<li>Toutes les définitions : <a href="./definitions">/definitions</a> </li>' +
      '<li>Une définition au hasard : <a href="./random">/random</a> </li>' +
      '<li>Toutes les définitions de la catégorie "Paradigmes de programmation" : <a href="./paradigmes">/paradigmes</a> </li>' +
      '<li>Une définition de la catégorie "Paradigmes de programmation" : <a href="./paradigmes/random">/paradigmes/random</a> </li>' +
      '<li>Toutes les définitions de la catégorie "Langages de programmation" : <a href="./langages">/langages</a> </li>' +
      '<li>Une définition de la catégorie "Langages de programmation" : <a href="./langages/random">/langages/random</a> </li>' +
      '<li>Toutes les définitions de la catégorie "Architecture logiciel" : <a href="./architecture">/architecture</a> </li>' +
      '<li>Une définition de la catégorie "Architecture logiciel" : <a href="./architecture/random">/architecture/random</a> </li>' +
      '<li>Toutes les définitions de la catégorie "Systèmes et réseau" : <a href="./systeme-reseau">/systeme-reseau</a> </li>' +
      '<li>Une définition de la catégorie "Systèmes et réseau" : <a href="./systeme-reseau/random">/systeme-reseau/random</a> </li>' +
      '<li>Toutes les définitions de la catégorie "Culture du test et bonnes pratiques" : <a href="./culture-test">/culture-test</a> </li>' +
      '<li>Une définition de la catégorie "Culture du test et bonnes pratiques" : <a href="./culture-test/random">/culture-test/random</a> </li>' +
      '<li>Toutes les définitions de la catégorie "Structures d\'exécution" : <a href="./structures-exec">/structures-exec</a> </li>' +
      '<li>Une définition de la catégorie "Structures d\'exécution" : <a href="./structures-exec/random">/structures-exec/random</a> </li>'
  );
});

// ------------- ROUTES FOR ALL DEFINITIONS/RANDOM ----------------

// route to get all definitions
app.get("/definitions", (req, res) => {
  res.status(200).json(definitions);
});

// route to get a random definition
app.get("/random", (req, res) => {
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
    case 2:
      catIndex = 2;
      category = "Architecture logiciel";
      break;
    case 3:
      catIndex = 3;
      category = "Systèmes et réseau";
      break;
    case 4:
      catIndex = 4;
      category = "Culture du test";
      break;
    case 5:
      catIndex = 5;
      category = "Structures d'exécution";
      break;
  }

  // get random definition inside the category
  const randomDef = Math.floor(
    Math.random() * definitions[catIndex][category].length
  );

  const randomId = definitions[catIndex][category][randomDef];

  res.status(200).json(randomId);
});

// --------------- ROUTE BY CATEGORY --------------------

// route to get all definitions from "Paradigmes de programmation"
app.get("/paradigmes", (req, res) => {
  res.status(200).json(definitions[0]["Paradigmes de programmation"]);
});

// route to get a random "Paradigmes" definition
app.get("/paradigmes/random", (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[0]["Paradigmes de programmation"].length
  );

  const randomId = definitions[0]["Paradigmes de programmation"][randomDef];

  res.status(200).json(randomId);
});

// route to get all definitions from "Langages de programmation"
app.get("/langages", (req, res) => {
  res.status(200).json(definitions[1]["Langages de programmation"]);
});

// route to get a random "Paradigmes" definition
app.get("/langages/random", (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[1]["Langages de programmation"].length
  );

  const randomId = definitions[1]["Langages de programmation"][randomDef];

  res.status(200).json(randomId);
});

// route to get all definitions from "Architecture logiciel"
app.get("/architecture", (req, res) => {
  res.status(200).json(definitions[2]["Architecture logiciel"]);
});

// route to get a random "Architecture" definition
app.get("/architecture/random", (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[2]["Architecture logiciel"].length
  );

  const randomId = definitions[2]["Architecture logiciel"][randomDef];

  res.status(200).json(randomId);
});

// route to get all definitions from "Systèmes et réseau"
app.get("/systeme-reseau", (req, res) => {
  res.status(200).json(definitions[3]["Systèmes et réseau"]);
});

// route to get a random "Systèmes et réseau" definition
app.get("/systeme-reseau/random", (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[3]["Systèmes et réseau"].length
  );

  const randomId = definitions[3]["Systèmes et réseau"][randomDef];

  res.status(200).json(randomId);
});

// route to get all definitions from "Culture du test"
app.get("/culture-test", (req, res) => {
  res.status(200).json(definitions[4]["Culture du test"]);
});

// route to get a random "Culture du test" definition
app.get("/culture-test/random", (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[4]["Culture du test"].length
  );

  const randomId = definitions[4]["Culture du test"][randomDef];

  res.status(200).json(randomId);
});

// route to get all definitions from "Structures d'exécution"
app.get("/structures-exec", (req, res) => {
  res.status(200).json(definitions[5]["Structures d'exécution"]);
});

app.listen(port, () => console.log(`Serveur à l'écoute sur le port ${port}`));

// route to get a random "Structures d'exécution" definition
app.get("/structures-exec/random", (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[5]["Structures d'exécution"].length
  );

  const randomId = definitions[5]["Structures d'exécution"][randomDef];

  res.status(200).json(randomId);
});

module.exports = app;
