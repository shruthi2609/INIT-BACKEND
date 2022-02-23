const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
router.post("/signin",async (req,res)=>{
    const data=req.body
    const user=await User.findOne({email:data.email})
    if(user){
    console.log(user.password)//db
    const authenticate= await bcrypt.compare(data.password,user.password)
    console.log(authenticate)
    if(authenticate){
     const token=   jwt.sign({email:data.email},"jamesbond",{expiresIn:"1h"})
     console.log(token)
        res.send({status:true,message:"Signin successfull",token:token})
    }
    else{
        res.send({status:false,message:"invalid credentials",token:" "})
    }
}
else{
    res.send("user data not found")
}
   /* const users=await User.find()
  const countrydata=  users.filter((item)=>item.country==="USA")

    console.log(users)
    res.send(countrydata)*/
  
})
module.exports=router