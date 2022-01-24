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
const hello_routes = require("./routes/hello");
const task_routes = require("./routes/task");
const userDemo_routes = require("./routes/userDemo");
const info_routes = require("./routes/info");
const techIssue_routes = require("./routes/techIssue");
const other_routes = require("./routes/other");

// Rutas base
app.use("/api", hello_routes);
app.use("/api", task_routes);
app.use("/api", userDemo_routes);
app.use("/api", info_routes);
app.use("/api", techIssue_routes);
app.use("/api", other_routes);

module.exports = app;
module.exports.handler = serverless(app);
