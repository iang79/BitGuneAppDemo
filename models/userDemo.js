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
    unique: true, // ensure unique email
  },
  telephone: {
    type: String,
    require: false,
  },
  birth: Date,
  sex: {
    type: String,
    require: false,
  },
  query: {
    type: String,
    require: true,
  },
  subQuery: {
    type: String,
    require: true,
  },
  msg: {
    type: String,
  },
  conditions: {
    type: Boolean,
    default: false,
    require: true,
  },
});

module.exports = mongoose.model("UserDemo", UserDemoSchema);
