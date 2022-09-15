const express=require("express");
const app= express();
const path=require("path");
const body_parser =require("body-parser")

const router =require("./userRoutes")


const port = 3000;
app.use(body_parser.urlencoded({ extended: false}))
app.use(express.json())
app.use(router)

app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname + "/index.html"))

    // res.json({
    //     name:"rameez",
    //     email:"ram@gmail.com",
    //     password:"123456"
    // })

    
})





app.listen(port,()=>{
    console.log("server is runing")
})