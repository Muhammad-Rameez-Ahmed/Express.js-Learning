const express=require("express");
const app= express();
const path=require("path");
const body_parser =require("body-parser")


const port = 3000;
app.use(body_parser.urlencoded({ extended: false}))


app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname + "/index.html"))
    
})

app.post("/api/v1/login",(req,res)=>{
    res.send(`<h1>Form submit </h1>
    <h2>Thanks Mr${req.body.name}</h2> 
    <h3>your Email is${req.body.email} </h3>
    <h4>your password is${req.body.password}</h4> `)
    console.log(req.body)
    console.log("name")
})



app.listen(port,()=>{
    console.log("server is runing")
})