const definitions = require("./definitions.json");

class Category {
  constructor(catName, catIndex) {
    this.catName = catName;
    this.catIndex = catIndex;
  }

  log() {
    return "h";
  }

  getGeneralRoute(catName, catIndex) {
    console.log(`/${catName}`);
  }

  getRandomRoute(catName, catIndex) {
    crossOriginIsolated.log(`/${catName}/random`);
    const randomDef = Math.floor(Math.random() * catIndex.length);
    const randomId = catIndex[randomDef];
    console.log(randomId);
  }

  getRouteById(catName, catIndex) {
    console.log(`/${catName}/:id`);
    const searchedId = req.params.id;
    const searchedDefinition = catIndex[searchedId];
    console.log(searchedDefinition);
  }
}

const paradigmes = new Category(
  "paradigmes",
  definitions[0]["Paradigmes de programmation"]
);

// console.log(paradigmes);
console.log(paradigmes.log);

// paradigmes.getGeneralRoute;
// paradigmes.getRandomRoute;
// paradigmes.getRouteById;
