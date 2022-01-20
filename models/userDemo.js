const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Informacion = ["Productos", "Promociones", "Devoluciones", "Envios"];
const IncidenciaTecnica = ["Instalación", "Transporte"];
const Otros = [];
const query = [Informacion, IncidenciaTecnica, Otros];

const UserDemoSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  birthDate: {
    type: Date,
    require: false,
  },
  sex: {
    type: String,
    require: false,
  },
  queryType: query,
  msg: {
    type: String,
    require: false,
  },
  conditions: {
    type: Boolean,
    require: true,
    default: false,
  },
});

module.exports = mongoose.model("UserDemo", UserDemoSchema);

/*
 Productos: String,
        Promociones: String,
        Devoluciones: String,
        Envios: String,

        Instalacion: String,
        Transporte: any,
      },
      */
