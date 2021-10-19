const router = require("express").Router();
const { User } = require("../../models");

// GET one user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const thisUser = user.get({ plain: true });
      res.status(200).json(thisUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
