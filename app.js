const express = require("express");
const serverless = require("serverless-http");
const app = express();

const bodyParser = require("body-parser");

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

// Cargar rutas
const userDemo_routes = require("./routes/userDemo");
const info_routes = require("./routes/info");

// Rutas base
app.use("/api", userDemo_routes);
app.use("/api", info_routes);

module.exports = app;
module.exports.handler = serverless(app);
