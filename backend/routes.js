const { Router } = require("express");
const { signUp, logIn } = require("./Controllers/user.js");

const route = Router();
route.post("/signUp", signUp);
route.post("/logIn", logIn);


module.exports = route; 
