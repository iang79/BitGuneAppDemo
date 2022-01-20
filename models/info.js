const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Info", InfoSchema);
