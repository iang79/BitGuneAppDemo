const UserDemo = require("../models/userDemo");

async function createUser(req, res) {
  const userDemo = new UserDemo();

  const params = req.body;

  userDemo.name = params.name;
  userDemo.surname = params.surname;
  userDemo.email = params.email;
  userDemo.telephone = params.telephone;
  userDemo.birth = params.birth;
  userDemo.sex = params.sex;
  userDemo.query = params.query;
  userDemo.subQuery = params.subQuery;
  userDemo.msg = params.msg;
  userDemo.conditions = params.conditions;

  try {
    const userDemoStore = await userDemo.save();

    if (!userDemoStore) {
      res.status(400).send({ msg: "No se ha guardado el usuario" });
    } else {
      //res.status(200).send({ userDemo: userDemoStore });
      res.status(200).redirect("/");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getUsers(rwq, res) {
  try {
    const users = await UserDemo.find();

    if (!users) {
      res.status(400).send({ msg: "Error al obtener usuarios" });
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteUser(req, res) {
  const idUser = req.params.id;

  try {
    const user = await UserDemo.findByIdAndDelete(idUser);

    if (!user) {
      res.status(400).send({ msg: "No se ha podido eliminar el usuario" });
    } else {
      res.status(200).send({ msg: "Usuario eliminado correctamente" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};
