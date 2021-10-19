const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((data) => data.get({ plain: true }));

    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET post by ID
router.get('/post/:id', async (req, res) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: [User,
      {
        model: Comment,
        include: User
      }]
    })
    if (singlePost) {
      const thisPost = singlePost.get({ plain: true });
      res.render('post', { thisPost });
    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
