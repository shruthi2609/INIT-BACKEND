const express = require("express");
const app=express()
//app.set("view engine","hbs")
app.set("view engine","jade")
app.get("/home",(req,res)=>{
  const data="john"
const designation="SSE"
res.render("indexPage",{username:data,des:designation})
})
app.listen(3000,()=>console.log("Server started"))