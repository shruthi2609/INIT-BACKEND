const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:atlasdb@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connected successfully")).catch((err)=>console.log(err))
const User=mongoose.model("Employee",mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,"enter your email"],
            unique:true,
            }
        ,
        password:{
            type:String,
            minlength:[5,"minimum length should be 5"],
           
        },
        designation:{
            type:String,
            enum:["SE","SSE","PM","TL"]
        },
        salary:Number,
        city:String,
        country:{
            type:String,
            default:"IND"
        },
        pincode:Number,
        Address:String,
        active:{
            type:Boolean,
            default:true
        }
    }
))
/*const obj1=new User({
        email:"john12@gmail.com",
        password:"john5",
        designation:"SSE",
        salary:20000,
        city:"XXX",
        pincode:6320089,
})
obj1.save().then(()=>console.log("created user successfully"))*/
module.exports=User