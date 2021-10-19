const router = require("express").Router();
// TODO: User needed?
const { User, Post } = require("../models");

// Prevent non logged in users from viewing the homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // TODO: check model for properties.
      order: [["name", "ASC"]],
    });

    const posts = postData.map((data) => data.get({ plain: true }));

    res.render("homepage", {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
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
