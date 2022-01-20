const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechIssueSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("TechIssue", TechIssueSchema);
