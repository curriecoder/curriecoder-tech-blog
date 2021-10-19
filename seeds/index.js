const sequelize = require("../config/connection");
const { Blogpost, Comment, User } = require("../models");

const blogSeedData = require("./blogSeedData.json");
const commentSeedData = require("./commentSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  const posts = await Blogpost.bulkCreate(blogSeedData);

  for (comment of commentSeedData) {
    const newComment = await Comment.create({
      ...comment,
      // Attach a random user ID to each comment
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
