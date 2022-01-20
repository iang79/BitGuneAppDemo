const express = require("express");
const InfoController = require("../controllers/info");

const api = express.Router();

api.post("/info", InfoController.createInfo);
api.get("/info", InfoController.getInfos);

module.exports = api;
