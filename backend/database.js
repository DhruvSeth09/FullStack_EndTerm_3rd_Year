const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URL = process.env.MONGO_URI;
async function db() {
  try {
    await mongoose.connect(URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = db;