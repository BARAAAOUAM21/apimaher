const express = require("express");
const app =express()
require('dotenv').config()
const connect=require('./models/connect')
const user = require('./models/user')
var cors = require('cors')
app.use(express.json())
app.use(cors())
connect()   
app.post('/user/newuser',async(req,res)=>{
      const newuser=new user(req.body)
      const newData=await newuser.save()
      res.json({message:'user added successfully',data:newData})
  })
  


app.get('/city/:id',async(req,res)=>{
    const myCity=await user.findById(req.params.id)
    res.json({message:'users  loaded successfully',data:myCity})

})

app.put('/age/:id',async(req,res)=>{
    await user.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
    const updatedAge=await user.findById(req.params.id)
    res.json({message:'users updated successfully',data:updatedAge})
 
})

app.delete('/user/:id',async(req,res)=>{
    const removedUser=await user.findByIdAndDelete(req.params.id)
    res.json({message:'users deleted successfully',data:removedUser})
})


  
   
   


const PORT= process.env.PORT || 4000
app.listen(PORT,(err)=>err?console.log(err):console.log(`app running on port ${PORT}`)) 