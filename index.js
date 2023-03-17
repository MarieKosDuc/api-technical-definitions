const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const routes = require("./routes.js");

// Allow cross origin requests
app.use(
  cors({
    origin: "*",
  })
);

app.listen(port, () => console.log(`Serveur à l'écoute sur le port ${port}`));

app.use(express.json())

// use routes from routes.js
app.use('', routes);

module.exports = app;
