
var http = require('http');
var fs = require('fs');
/*var mime = {
    '.html':'text/html',
    '.js':'text/javascript',
    '.css':'text/css'
}
var path = require('path');
http.createServer(function(req,res){
    var url = req.url;//是请求的文件名
    console.log(path.extname(url));
    res.setHeader('Content-Type',mime[path.extname(url)]+'l;charset=utf8')
    fs.readFile('.'+url,'utf8',function(err,data){
        res.write(data);
        res.end();
    })*/

var mime = require('mime');
 var path = require('path');
 http.createServer(function(req,res){
 var url = req.url;//是请求的文件名
 console.log(path.extname(url));
     if(url == 'favicon.ico'){
         return res.end();
     }
     if(url == '/'){
         url = '/index.html';
     }
 res.setHeader('Content-Type',mime.lookup(url)+';charset=utf8')
 fs.readFile('.'+url,'utf8',function(err,data){
 res.write(data);
 res.end();
 })
}).listen(8080);