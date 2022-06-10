const express = require("express");
const  fs = require("fs");
const app=express();
const path=require("path");
port=80;
// serving static files those which are present publicly on the server through express we can use template engines which help in rendering of other files attached to main easily one of them is pug
app.use("/static",express.static("static"))
app.use(express.urlencoded())
app.set("view engine","pug");
// set views directory
app.set("views",path.join(__dirname,"views"))
// our demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render("demo",{title:"sarthak",mesaage:"this is my first pug"})
// })
app.get("/",(req,res)=>{
    const params={message:"form is submitted"}
    res.status(200).render("index1.pug",params)
})
app.post("/",(req,res)=>{
    names=req.body.name
    number=req.body.number
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let outputtowrite=`name of client is ${names} his/her age is ${number} gender of client is ${gender} his/her address is ${address} more info of client is ${more} `
    fs.writeFileSync("output.txt",outputtowrite)
    const params={"message":"form is submitted"}
    res.status(200).render("index1.pug",params)
})
app.listen(port,()=>{
    console.log(`the application started successfully on ${port}`)
})