const express = require("express");
const UserDemoController = require("../controllers/userDemo");

const api = express.Router();

api.post("/user", UserDemoController.createUser);
api.get("/user", UserDemoController.getUsers);
api.delete("/user/:id", UserDemoController.deleteUser);

module.exports = api;
