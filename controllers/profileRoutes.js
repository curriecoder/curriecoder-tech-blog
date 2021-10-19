const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET posts for logged in users by user ID
router.get('/', withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    const posts = userPosts.map(post => post.get({ plain: true }));
    res.render('user-profile', {
      layout: 'profile',
      posts
    });
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;