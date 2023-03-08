const definitions = require("./definitions.json");

const randomCat = Math.floor(Math.random() * definitions.length);
console.log(randomCat);
// console.log(definitions[1]["Langages de programmation"].length);
// console.log(definitions[0]["Paradigmes de programmation"]);
// console.log(definitions[1]["Langages de programmation"][0]);

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

// console.log(category);

// console.log(definitions[catIndex][category]);

const randomDef = Math.floor(
  Math.random() * definitions[catIndex][category].length
);

console.log(definitions[catIndex][category][randomDef]);
