const Other = require("../models/other");

async function createOther(req, res) {
  const other = new Other();
  const params = req.body;

  other.name = params.name;
  other.description = params.description;

  try {
    const otherStore = await other.save();

    if (!otherStore) {
      res.status(400).send({ msg: "No se ha guardado la información" });
    } else {
      res.status(200).send({ other: otherStore });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getOthers(rwq, res) {
  try {
    const others = await Other.find();

    if (!others) {
      res.status(400).send({ msg: "Error al obtener otros" });
    } else {
      res.status(200).send(others);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createOther,
  getOthers,
};
