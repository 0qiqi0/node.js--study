/**
 * Created by dell on 2016/3/14.
 */
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var path=require('path');
var url=require('url');
var server=http.createServer(function(req,res) {
    var urlObj = url.parse(req.url,true);   //index.html?name=zfpx&age=6
    console.log(urlObj);      //true将query变成对象。  pathname是前半段，query是后半段
    res.writeHead(200,{'Content_type':'text/html;charset=utf-8'})
    if(urlObj.pathname=='/apple'){
        res.end(urlObj.query.num+'个苹果');
    }
}).listen(8080);