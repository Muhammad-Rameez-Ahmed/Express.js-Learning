const express=require("express");
const app= express();
const path=require("path");
const port = 3000;


app.get("/",(req,res)=>{
   
    res.sendFile(path.join(__dirname + "/index.html"))
    
})

app.post("/api/v1/login",(req,res)=>{
    res.send("<h1>Form submit</h1>")
    console.log("name")
})



app.listen(port,()=>{
    console.log("server is runing")
})