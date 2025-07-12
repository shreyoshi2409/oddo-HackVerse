import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ msg: "Title and description required" });
  }
  try {
    const q = new Question({ title, description });
    await q.save();
    res.status(201).json({ msg: "Question saved!" });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});

export default router;