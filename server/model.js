const mongoose =require("mongoose")

const Model = mongoose.model("userDetails", new mongoose.Schema({
    username:String,
    email:String,
    number:String,
    dateOfBirth:String,
    password:String,
}))

module.exports = Model