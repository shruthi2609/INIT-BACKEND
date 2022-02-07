const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
router.post("/signup",async (req,res)=>{
const data=req.body
console.log(data)
data.password=await bcrypt.hash(data.password,7)

const user1=new User((
    {
        email:data.email,
        password:data.password,
        designation:data.designation,
        salary:data.salary,
        city:data.city,
        country:data.country,
        pincode:data.pincode,
    }
))
await user1.save().then(()=>res.send("signup successfull")).catch((err)=>{
    console.log(err)
    res.send("error occured in signup")})
})
module.exports=router
