const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
    const body = await Post.create(req.body)
    
  } catch (error) {
    
  }
})