const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./User");

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING);

const run = async () => {
  const user = await User.findById("648ad60d8c8da4bf1ca49157");
  console.log(user);
};

run();
