
var express  = require("express");
var os       = require("os");
var hostname = os.hostname()
var app = express();

app.get("/",(req,res)=>{
    res.send("Hello world from "+hostname);
})

app.listen(8080,()=>{
    console.log("Sample app is listening on port 8080");
})