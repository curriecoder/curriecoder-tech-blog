const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const postRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;