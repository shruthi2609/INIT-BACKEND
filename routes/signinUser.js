const express=require("express")
const router=express.Router()
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
router.post("/signin",async (req,res)=>{
    const data=req.body
    const user=await User.findOne({email:data.email})
    if(user){
    console.log(user.password)//db
    const authenticate= await bcrypt.compare(data.password,user.password)
    console.log(authenticate)
    if(authenticate){
        res.send("signin successful")
    }
    else{
        res.send("invalid credentials")
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