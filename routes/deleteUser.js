const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
router.post("/deleteuser",async (req,res)=>{
    const data=req.body
const result=await User.remove({email:data.email})
res.send("deleted user")
})
module.exports=router