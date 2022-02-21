const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const User=require("../models/userModel")
const authorize=require("../middleware/authorize")

router.post("/updateUser",authorize,async (req,res)=>{
    const data=req.body
    const result=await User.findOne({email:data.email})
    console.log(data)
    data.updatedpassword=await bcrypt.hash(data.updatedpassword,7)
    const result2=await User.findByIdAndUpdate(result._id,{country:data.updatedcountry,password:data.updatedpassword})
    res.send("updated password")
})

router.post("/deactivate",async (req,res)=>{
    const data=req.body
    const result=await User.findOne({email:data.email})

const result2=await User.findByIdAndUpdate(result._id,{active:false})
res.send("account is deactivated")
})
router.post("/activate",async (req,res)=>{
    const data=req.body
    const result=await User.findOne({email:data.email})
const result2=await User.findByIdAndUpdate(result._id,{active:true})
res.send("accoun is activated")
})
module.exports=router