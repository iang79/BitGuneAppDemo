const express = require("express");
const TechIssueController = require("../controllers/techIssue");

const api = express.Router();

api.post("/tech", TechIssueController.createTechIssue);
api.get("/tech", TechIssueController.getTechIssues);

module.exports = api;
