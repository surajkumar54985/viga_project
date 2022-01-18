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

//Configration of static file
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

//Configuration for Multer
const upload = multer({ dest: "public/files" });
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// // Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };

// //Calling the "multer" Function
// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

//api endpoint for uploading file

// app.post("/api/uploadFile", upload.single("myFile"), async(req, res) => {
//   // Stuff to be added later
//   // console.log(req.file);

//   try {
//     const newFile = await File.create({
//       name: req.file.filename,
//     });
//     res.status(200).json({
//       status: "success",
//       message: "File created successfully!!",
//     });
//   } catch (error) {
//     res.json({
//       error,
//     });
//   }
// });

app.post("/api/uploadFile", upload.single("myFile"), (req, res) => {
  // Stuff to be added later
  console.log(req.file);
});

//api endpoints to render html
app.use("/", (req, res) => {
  res.status(200).render("index");
});

// Routes will be added here later on

//Express server
module.exports = app;