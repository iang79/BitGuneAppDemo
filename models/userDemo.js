const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { checkSchema } = require("express-validator");

const UserDemoSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  telephone: {
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
  query: {
    type: String,
    require: false,
  },
  subQuery: {
    type: String,
    require: false,
  },
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
