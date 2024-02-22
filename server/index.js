const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const Model = require("./model")
mongoose.connect("mongodb://localhost:27017/crud").then(()=>console.log("Database connected..."))
app.use(cors())
app.use(express.json())

app.get("/", async (req,res)=>{
    const result = await Model.find();
    res.send(result)
})

app.post("/",async (req,res)=>{
    const result = await Model(req.body).save()
    res.send(result);
})

app.put("/:id",async(req,res)=>{
    console.log(req.params.id);

    let result = await Model.findByIdAndUpdate({_id:req.params.id})
    console.log(result);
    result.username = req.body.username
    result.email = req.body.email
    result.number = req.body.number
    result.username = req.body.username
    result.dateOfBirth = req.body.dateOfBirth
    const response= await result.save()
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