const mongoose = require('mongoose');

const user = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

let model = mongoose.model("User", user);
module.exports =  model;
