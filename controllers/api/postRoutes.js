const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id', 'title', 'post_text', 'created_at'],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      attributes: ["id", "title", "post_text", "createdAt"],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});