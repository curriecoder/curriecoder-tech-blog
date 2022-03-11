// TODO: posting is currently loading with all user values as NaN

const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");


router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["user_id", "title", "post_text", "date"],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.json(400).json(err);
  }
});

// POST new post, logged in
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id, 
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE to edit a post, logged in

// DELETE a post, logged in

module.exports = router;