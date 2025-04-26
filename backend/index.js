const express = require("express");
const database = require("./database.js");
const Routes = require("./routes.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Routes);
app.use(express.json());

database();
app.get("/", (req, res) => {
    res.send("Youtube is Live");
});
  
app.listen(8080, () => {
    console.log("connected to backend");
});