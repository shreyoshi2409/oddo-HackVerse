const Question = require("../models/Question");
const Tag = require("../models/Tag");

exports.askQuestion = async (req, res) => {
  const { title, description, tags } = req.body;
  // Find or create tags
  const tagDocs = await Promise.all(tags.map(async tag => {
    let doc = await Tag.findOne({ name: tag.name });
    if (!doc) doc = await Tag.create(tag);
    return doc;
  }));
  const question = new Question({
    title,
    description,
    tags: tagDocs.map(tag => tag._id),
    author: req.user._id
  });
  await question.save();
  res.status(201).json(question);
};