const definitions = require("./definitions.json");
const homePage = require("./apihomepage.js");

// API "homepage"
const getHome = (req, res) => {
  res.send(homePage);
};

// ------------- ROUTES FOR ALL DEFINITIONS/RANDOM ----------------

// route to get all definitions
const getDefinitions = (req, res) => {
  res.status(200).json(definitions);
};

const getRandom = (req, res) => {
  // get random category
  const randomCat = Math.floor(Math.random() * definitions.length);

  // get this category's index and title in the JSON
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
};

// --------------- ROUTES BY CATEGORY --------------------

// ------------- Paradigmes --------------

// route to get all definitions from "Paradigmes de programmation"
const getParadigmes = (req, res) => {
  res.status(200).json(definitions[0]["Paradigmes de programmation"]);
};

// route to get a random "Paradigmes" definition
const getParadigmesRandom = (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[0]["Paradigmes de programmation"].length
  );

  const randomId = definitions[0]["Paradigmes de programmation"][randomDef];

  res.status(200).json(randomId);
};

// route to get a precise "Paradigmes" definition
const getParadigmesId = (req, res) => {
  const searchedId = req.params.id;
  const searchedDefinition =
    definitions[0]["Paradigmes de programmation"][searchedId];
  res.status(200).json(searchedDefinition);
};

// ------------- Langages --------------------

// route to get all definitions from "Langages de programmation"
const getLangages = (req, res) => {
  res.status(200).json(definitions[1]["Langages de programmation"]);
};

// route to get a random "Langages" definition
const getLangagesRandom = (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[1]["Langages de programmation"].length
  );

  const randomId = definitions[1]["Langages de programmation"][randomDef];

  res.status(200).json(randomId);
};

// route to get a precise "Langages" definition
const getLangagesId = (req, res) => {
  const searchedId = req.params.id;
  const searchedDefinition =
    definitions[1]["Langages de programmation"][searchedId];

  if (!searchedDefinition) {
    return res.status(404).send("Product not found");
  }

  res.status(200).json(searchedDefinition);
};

//  --------------- Architecture logiciel -------------

// route to get all definitions from "Architecture logiciel"
const getArchitecture = (req, res) => {
  res.status(200).json(definitions[2]["Architecture logiciel"]);
};

// route to get a random "Architecture" definition
const getArchitectureRandom = (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[2]["Architecture logiciel"].length
  );

  const randomId = definitions[2]["Architecture logiciel"][randomDef];

  res.status(200).json(randomId);
};

// route to get a precise "Architecture" definition
const getArchitectureId = (req, res) => {
  const searchedId = req.params.id;
  const searchedDefinition =
    definitions[2]["Architecture logiciel"][searchedId];
  res.status(200).json(searchedDefinition);
};

//  ------------------ Systèmes et réseau -------------

// route to get all definitions from "Systèmes et réseau"
const getSystemesReseau = (req, res) => {
  res.status(200).json(definitions[3]["Systèmes et réseau"]);
};

// route to get a random "Systèmes et réseau" definition
const getSystemesReseauRandom = (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[3]["Systèmes et réseau"].length
  );

  const randomId = definitions[3]["Systèmes et réseau"][randomDef];

  res.status(200).json(randomId);
};

// route to get a precise "Systèmes et réseau" definition
const getSystemesReseauId = (req, res) => {
  const searchedId = req.params.id;
  const searchedDefinition = definitions[3]["Systèmes et réseau"][searchedId];
  res.status(200).json(searchedDefinition);
};

// ------------ Culture du test --------------------

// route to get all definitions from "Culture du test"
const getCultureTest = (req, res) => {
  res.status(200).json(definitions[4]["Culture du test"]);
};

// route to get a random "Culture du test" definition
const getCultureTestRandom = (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[4]["Culture du test"].length
  );

  const randomId = definitions[4]["Culture du test"][randomDef];

  res.status(200).json(randomId);
};

// route to get a precise "Culture du test" definition
const getCultureTestId = (req, res) => {
  const searchedId = req.params.id;
  const searchedDefinition = definitions[4]["Culture du test"][searchedId];
  res.status(200).json(searchedDefinition);
};

// ---------------- Structures d'exécution ------------------

// route to get all definitions from "Structures d'exécution"
const getStructuresExec = (req, res) => {
  res.status(200).json(definitions[5]["Structures d'exécution"]);
};

// route to get a random "Structures d'exécution" definition
const getStructuresExecRandom = (req, res) => {
  const randomDef = Math.floor(
    Math.random() * definitions[5]["Structures d'exécution"].length
  );

  const randomId = definitions[5]["Structures d'exécution"][randomDef];

  res.status(200).json(randomId);
};

// route to get a precise "Structures d'exécution" definition
const getStructuresExecId = (req, res) => {
  const searchedId = req.params.id;
  const searchedDefinition =
    definitions[5]["Structures d'exécution"][searchedId];
  res.status(200).json(searchedDefinition);
};

module.exports = {
  getHome,
  getDefinitions,
  getRandom,
  getArchitecture,
  getArchitectureId,
  getArchitectureRandom,
  getCultureTest,
  getCultureTestId,
  getCultureTestRandom,
  getLangages,
  getLangagesId,
  getLangagesRandom,
  getParadigmes,
  getParadigmesId,
  getParadigmesRandom,
  getStructuresExec,
  getStructuresExecId,
  getStructuresExecRandom,
  getSystemesReseau,
  getSystemesReseauId,
  getSystemesReseauRandom,
};
