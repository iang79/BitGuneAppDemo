const express = require("express");
const OtherController = require("../controllers/other");

const api = express.Router();

api.post("/other", OtherController.createOther);
api.get("/other", OtherController.getOthers);

module.exports = api;
