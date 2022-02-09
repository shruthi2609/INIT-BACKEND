const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
router.get("/finduser",async (req,res)=>{
const result=await User.find({},{email:1,country:1,_id:0})
console.log(result)
res.send("dummy")
})
module.exports=router