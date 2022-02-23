const jwt=require("jsonwebtoken")
const authorize=(req,res,next)=>{
try{
const reqtoken=req.headers["authorization"]
console.log("middleware",reqtoken)
const token=reqtoken.replace("Bearer ","")
const decodedtoken=jwt.verify(token,"jamesbond")
next()
}
catch(err){
    res.send({msg:"authorization error , login again",status:false})
}

}
module.exports=authorize