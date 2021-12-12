const express = require("express");
require('./db/conn');
const studentrouter = require('./router/student');
const validator = require("validator");
const port = process.env.port || 8007;
const app = express();

app.use(express.json());
// use router...
app.use(studentrouter);
    
app.listen(port, () => {
    console.log(`connection established on ${port}`)
})

