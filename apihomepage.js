const homePage =
  '<h1>Bienvenue dans cette API de définitions techniques, basée sur les fiches "arbre" d\'<a href="https://adatechschool.fr/">Ada Tech School</a> !</h1>' +
  "Voici les routes pour retrouver : <ul>" +
  '<li>Toutes les définitions : <a href="./definitions">/definitions</a> </li>' +
  '<li>Une définition au hasard : <a href="./random">/random</a> </li> <br />' +
  '<li>Toutes les définitions de la catégorie "Paradigmes de programmation" : <a href="./paradigmes">/paradigmes</a> </li>' +
  '<li>Une définition au hasard de la catégorie "Paradigmes de programmation" : <a href="./paradigmes/random">/paradigmes/random</a> </li>' +
  '<li>Une définition de la catégorie "Paradigmes de programmation" : <a href="./paradigmes/:id">/paradigmes/:id</a> </li> <br />' +
  '<li>Toutes les définitions de la catégorie "Langages de programmation" : <a href="./langages">/langages</a> </li>' +
  '<li>Une définition au hasard de la catégorie "Langages de programmation" : <a href="./langages/random">/langages/random</a> </li>' +
  '<li>Une définition de la catégorie "Langages de programmation" : <a href="./langages/:id">/langages/:id</a> </li> <br />' +
  '<li>Toutes les définitions de la catégorie "Architecture logiciel" : <a href="./architecture">/architecture</a> </li>' +
  '<li>Une définition au hasard de la catégorie "Architecture logiciel" : <a href="./architecture/random">/architecture/random</a> </li>' +
  '<li>Une définition de la catégorie "Architecture logiciel" : <a href="./architecture/:id">/architecture/:id</a> </li> <br />' +
  '<li>Toutes les définitions de la catégorie "Systèmes et réseau" : <a href="./systeme-reseau">/systeme-reseau</a> </li>' +
  '<li>Une définition au hasard de la catégorie "Systèmes et réseau" : <a href="./systeme-reseau/random">/systeme-reseau/random</a> </li>' +
  '<li>Une définition de la catégorie "Systèmes et réseau" : <a href="./systeme-reseau/:id">/systeme-reseau/:id</a> </li> <br />' +
  '<li>Toutes les définitions de la catégorie "Culture du test et bonnes pratiques" : <a href="./culture-test">/culture-test</a> </li>' +
  '<li>Une définition au hasard de la catégorie "Culture du test et bonnes pratiques" : <a href="./culture-test/random">/culture-test/random</a> </li>' +
  '<li>Une définition de la catégorie "Culture du test et bonnes pratiques" : <a href="./culture-test/:id">/culture-test/:id</a> </li> <br />' +
  '<li>Toutes les définitions de la catégorie "Structures d\'exécution" : <a href="./structures-exec">/structures-exec</a> </li>' +
  '<li>Une définition au hasard de la catégorie "Structures d\'exécution" : <a href="./structures-exec/random">/structures-exec/random</a> </li>' +
  '<li>Une définition de la catégorie "Structures d\'exécution" : <a href="./structures-exec/:id">/structures-exec/:id</a> </li>';

module.exports = homePage;
