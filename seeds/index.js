const sequelize = require("../config/connection");
const { Post, Comment, User } = require("../models");

const postSeedData = require("./postData");
const commentSeedData = require("./commentData");
const userSeedData = require("./userData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  const posts = await Post.bulkCreate(postSeedData);

  // TODO: no information about comments used currently...
  for (comment of commentSeedData) {
    const newComment = await Comment.create({
      ...Comment,
      // Attach a random user ID to each comment
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
