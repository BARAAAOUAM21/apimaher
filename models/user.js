const mongoose=require('mongoose')
const {Schema}=mongoose

const user=new Schema({
    userName:{type:String,require:true},
    age:Number,
    city:[{type:String}] 
})

module.exports=mongoose.model('userSchema',user)