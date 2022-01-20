const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
