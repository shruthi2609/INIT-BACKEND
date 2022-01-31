const express=require("express")
const router=express.Router()
router.get("/home",(req,res)=>{
    res.send("<h1>Home</h1>")
})
router.get("/products",(req,res)=>{
    res.send("<h1>products</h1>")
})
module.exports=router
