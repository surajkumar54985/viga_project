const mongoose = require('mongoose');
const { stringify } = require('querystring');

//Creating a file schema and uploading file
const fileSchema = new mongoose.Schema({
    createdAt : {
        type : Date,
        default : Date.now,
    },
    name : {
        type : String,
        required : [true, "Uploaded file must have a name"],
    },
});

// Creating a Model from that Schema
const File = mongoose.model("File", fileSchema);

// Exporting the Model to use it in app.js File.
module.exports = File;