const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const Model = require("./model")
const bcrypt = require("bcrypt")

mongoose.connect("mongodb://localhost:27017/crud").then(()=>console.log("Database connected..."))
app.use(cors())
app.use(express.json())

app.get("/", async (req,res)=>{
    const result = await Model.find();
    res.send(result)
})

app.post("/login", async(req,res)=>{
    let result = await Model.findOne({email:req.body.email})
    if(!result) return res.send({message:"User not found."})
    result = bcrypt.compare(req.body.password, result.password)
    res.send(result)
})

app.post("/register",async (req,res)=>{
    console.log("req");
    // const salt = await bcrypt.genSalt(5);
    const password = await bcrypt.hash(req.body.password, 2)
    const result = await Model({
        username:req.body.username,
        email:req.body.email,
        number:req.body.number,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        password : password
    }).save()
    console.log(result);
    return res.send(result);
})

app.put("/:id",async(req,res)=>{
    console.log(req.params.id);

    let result = await Model.findByIdAndUpdate({_id:req.params.id})
    result.username = req.body.username
    result.email = req.body.email
    result.number = req.body.number
    result.username = req.body.username
    result.dateOfBirth = req.body.dateOfBirth
    await result.save()
    res.send({
        message:"Updated"
    })
})

app.delete("/:id",async (req,res)=>{
    await Model.findByIdAndDelete({_id:req.params.id})

    res.send({
        message:"Deleted"
    })
})

app.listen(3001,()=>console.log("Server listening at 3001..."))