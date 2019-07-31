const express = require("express");
let app = new express();

app.get("/ping",function(req, res){
    res.send("<h2>ping!</h2><a href=\"pong\"><button>pong</button></a>")
});

app.get("/pong",function(req, res){
    res.send("<h2>pong!</h2><a href=\"ping\"><button>ping</button></a>")
});

let port = 1234;
app.listen(port,function(){
    console.log("start...");
})
