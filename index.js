const http = require('http');
const port = process.env.PORT|| 9000;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('{ "success":true, "data":"Index", "message":"Hello World", "code":200}');
}).listen(port); 

/* var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello Diva');
})

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
}); */