const express = require("express");
const router = express.Router();

const {
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
} = require("./controllers.js");

router.get("/", getHome);

router.get("/alldefinitions", getDefinitions);

router.get("/random", getRandom);

router.get("/paradigmes", getParadigmes);
router.get("/paradigmes/random", getParadigmesRandom);
router.get("/paradigmes/:id", getParadigmesId);

router.get("/langages", getLangages);
router.get("/langages/random", getLangagesRandom);
router.get("/langages/:id", getLangagesId);

router.get("/architecture", getArchitecture);
router.get("/architecture/random", getArchitectureRandom);
router.get("/architecture/:id", getArchitectureId);

router.get("/systeme-reseau", getSystemesReseau);
router.get("/systeme-reseau/random", getSystemesReseauRandom);
router.get("/systeme-reseau/:id", getSystemesReseauId);

router.get("/culture-test", getCultureTest);
router.get("/culture-test/random", getCultureTestRandom);
router.get("/culture-test/:id", getCultureTestId);

router.get("/structures-exec", getStructuresExec);
router.get("/structures-exec/random", getStructuresExecRandom);
router.get("/structures-exec/:id", getStructuresExecId);

module.exports = router;
