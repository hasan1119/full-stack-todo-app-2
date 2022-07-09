// dependencies:
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        require: true,
        trim: true,
    }
})


const User = model("User", userSchema);
module.exports = User;