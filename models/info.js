const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: false,
  },
});

const Info = [
  {
    name: "Información",
    value: 1,
    sub: [
      { name: "Productos", value: 1 },
      { name: "Promociones", value: 2 },
      { name: "Devoluciones", value: 3 },
      { name: "Envíos", value: 4 },
    ],
  },
  {
    name: "Incidencia técnica",
    value: 2,
    sub: [
      { name: "Instalación", value: 1 },
      { name: "Transporte", value: 2 },
    ],
  },
  {
    name: "Otros",
    value: 3,
  },
];

module.exports = mongoose.model("Info", InfoSchema);
