const express=require("express")
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
/*app.use(express.urlencoded({extended:false}))
app.use(express.json())*/
app.get("/home",(req,res)=>{
console.log(req)
res.status(200).send("<h1>Home Page</h1>")
})
app.get("/products",(req,res)=>{
    res.status(200).send({pname:"redmi",price:"28372"})
})
app.get("/search/:productname/:pricerange",(req,res)=>{
    console.log(req.params.productname)
    const pname=req.params.productname
    const price=Number(req.params.pricerange)
    if(pname==="redmi"&& price>=12000){
        res.send({
            manufacturer:"redmi",
            ram:"16gb",
            graphicard:true
        })
    }
})
app.get("/find",(req,res)=>{
    const pname=req.query.pname
    const price=Number(req.query.price)
    if(pname==="redmi"&& price>=12000){
        res.send({
            manufacturer:"redmi",
            ram:"16gb",
            graphicard:true
        })
    }
})
app.post("/signup",(req,res)=>{
    console.log(req.body)
    res.send("received data")
})
app.all("*",(req,res)=>{
    res.status(404).send("<h1> Error </h1>")
})
//app.post
//app.all
//app.listen
app.listen(3000,()=>{
    console.log("server started")
})
