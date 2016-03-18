
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var path=require('path');
var url=require('url');
var server=http.createServer(function(req,res) {
    var urlObj = url.parse(req.url,true);   //index.html?name=zfpx&age=6
    //console.log(urlObj);      //true将query变成对象。  pathname是前半段，query是后半段

    if(urlObj.pathname=='/'){
        fs.readFile('./clock.html',function(err,data){
            res.writeHead(200,{'Content_type':'text/html;charset:utf-8'})
            res.end(data);
        })
    }else if(urlObj.pathname=='/clock'){
        res.statusCode=404;
        res.end('404');
    }
}).listen(8080);