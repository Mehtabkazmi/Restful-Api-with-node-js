const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength:3
    },
    email: {
        type: String,
        require: true,
        unique: [true, "email is already present"],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        unique:true,
        require: true
    },
    address1: {
        type:String,
        require: true
    }
})


// now creating collection

const student = new mongoose.model('Teacher', studentSchema);

module.exports = student;