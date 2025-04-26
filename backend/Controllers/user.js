const User  = require("./../Modals/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (user) return res.status(409).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
  
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res
        .status(200)
        .json({ message: "User registered", user: newUser, token });
    } catch (error) {
      return res.status(500).json({ message: "Error during signup", error });
    }
  };
  
const logIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(404)
          .json({ message: "User does not exist", status: -1 });
  
      const isPwdValid = await bcrypt.compare(password, user.password);
      if (!isPwdValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login Successful", user, token });
    } catch (error) {
      console.error("Error during login: ", error);
      return res.status(500).json({ message: "Error during login" });
    }
  };
  
  module.exports = {logIn,signUp};