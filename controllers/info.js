const Info = require("../models/info");

async function createInfo(req, res) {
  const info = new Info();
  const params = req.body;

  info.name = params.name;
  info.sub = params.sub;
  info.value = params.value;

  try {
    const infoStore = await info.save();

    if (!infoStore) {
      res.status(400).send({ msg: "No se ha guardado la información" });
    } else {
      res.status(200).send({ info: infoStore });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getInfos(rwq, res) {
  try {
    const infos = await Info.find();

    if (!infos) {
      res.status(400).send({ msg: "Error al obtener informaciones" });
    } else {
      res.status(200).send(infos);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createInfo,
  getInfos,
};
