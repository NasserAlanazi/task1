const express = require("express");
let app = new express();

app.get("/ping",function(req, res){
    res.send("<form action=\"pong\"><h2>ping!</h2><button type=\"submit\">pong</button></form>")
});

app.get("/pong",function(req, res){
    res.send("<form action=\"ping\"><h2>pong!</h2><button type=\"submit\">ping</button></form>")
});

let port = 1234;
app.listen(port,function(){
    console.log("start...");
})
