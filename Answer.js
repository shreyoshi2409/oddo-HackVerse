const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  votes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, value: Number }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Answer", answerSchema);