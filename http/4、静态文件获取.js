//静态文件服务器
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    //指定文件和路径设置编码
    var url=req.url;
    if(url=='/index.html'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('./index.html','utf8',function(err,data){
            res.write(data);
            res.end();
        })
    }else if (url=='/style.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.readFile('./style.css','utf8',function(err,data){
            res.write(data);
            res.end();
        })
    }else if (url=='/index.js'){
        res.setHeader('Content-Type','text/javascript;charset=utf-8');
        fs.readFile('./index.js','utf8',function(err,data){
            res.write(data);
            res.end();
        })
    }

}).listen(8080);