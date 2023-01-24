const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')
const mongoose  = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const {Schema} = mongoose;

const userSchema = new Schema({
  imgUrl:{type:String,required:true},
  title:{type:String,required:true},
  description:{type:String,required:true}
},
{timestamps:true}
)

const Cards =mongoose.model("cards",userSchema)

const app = express()


app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
  res.send("<h1>Admin Panel</h1>")
})


app.get("/cards",(req,res)=>{
  Cards.find({},(err,docs)=>{
       if(!err){
        res.send(docs)
       }
       else{
        res.status(404).json({message:err})
       }
  })
})

app.get("/cards/:id",(req,res)=>{
  const {id} = req.params
  Cards.findById(id,(err,doc)=>{
    if(!err){
      if(doc){
        res.send(doc)
      }else{
        res.status(404).json({message:"NOT FOUND"})
      }
    }else{
      res.status(500).json({message:err})
    }
  })
})

app.delete("/cards/:id",(req,res)=>{
  const {id} = req.params
  Cards.findByIdAndDelete(id,(err)=>{
    if(!err){
      res.send("deleted data")
     
    }else{
        res.status(404).json({message:err})
    }
  })
})

app.post("/cards",(req,res)=>{
  const card= new Cards({
    imgUrl:req.body.imgUrl,
    title:req.body.title,
    description:req.body.description
  })
  card.save()
  res.json({message:"Card Created"})
})





const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)

mongoose.set('strictQuery', true)
mongoose.connect(url,(err)=>{
  if(!err){
    console.log("DB connect");
    app.listen(PORT,()=>{
      console.log("Server Start");
    })
  }
})