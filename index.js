const express = require("express");
const bodyParser = require("body-parser");

const File = require("./model/fileSchema");

const multer = require("multer");

const app = express();
const path = require("path");

// Configurations for "body-parser"
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Configurations for setting up ejs engine &
// displaying static files from "public" folder
// TO BE ADDED LATER

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

app.use("/", (req, res) => {
    res.status(200).render("index");
  });

// Routes will be added here later on

//Express server
module.exports = app;