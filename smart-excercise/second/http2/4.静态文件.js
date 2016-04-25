/**
 * Created by dell on 2016/4/25.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var url = req.url;//是请求的文件名
    if(url == '/index.html'){
        res.setHeader('Content-Type','text/html;charset=utf8')
        fs.readFile('./index.html','utf8',function(err,data){
            res.write(data);
            res.end();
        })
    }else if(url == '/style.css'){
        res.setHeader('Content-Type','text/css;charset=utf8')
        fs.readFile('./style.css','utf8',function(err,data){
            res.write(data);
            res.end();
        })
    }


}).listen(8080);