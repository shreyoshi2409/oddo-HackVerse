const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  color: String
});

module.exports = mongoose.model("Tag", tagSchema);