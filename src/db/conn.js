const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
    .then(() => {
        console.log("connection established");
    })
    .catch(() => {
        console.log("not connected");
    })

