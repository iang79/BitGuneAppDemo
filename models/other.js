const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtherSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Other", OtherSchema);
