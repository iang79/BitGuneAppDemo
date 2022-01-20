const TechIssue = require("../models/techIssue");

async function createTechIssue(req, res) {
  const techIssue = new TechIssue();
  const params = req.body;

  techIssue.name = params.name;
  techIssue.description = params.description;

  try {
    const techIssueStore = await techIssue.save();

    if (!techIssueStore) {
      res.status(400).send({ msg: "No se ha guardado la información" });
    } else {
      res.status(200).send({ techIssue: techIssueStore });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getTechIssues(rwq, res) {
  try {
    const techIssues = await techIssue.find();

    if (!techIssues) {
      res.status(400).send({ msg: "Error al obtener usuarios" });
    } else {
      res.status(200).send(techIssues);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createTechIssue,
  getTechIssues,
};
