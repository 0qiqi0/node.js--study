/**
 * Created by dell on 2016/3/14.
 */
/**
 * Created by dell on 2016/3/14.
 */
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var path=require('path');
var server=http.createServer(function(req,res){
    var url=req.url;
    if(url=='/'){
        url='/index.html';
    }
    if(url=='/favicon.ico'){
        return res.end('404');
    }
    console.log(url);
    res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
    fs.exists('.'+url,function(exists){
        if(exists){
            fs.readFile('.'+url,function(err,data){
                console.error(url,err,data);
                if(err){
                    res.statusCode=404;
                    res.end();
                }else{
                    res.statusCode=200;
                    res.write(data);
                    res.end();
                }
            })
        }else{
           res.statusCode=404;
            res.end()
        }
    })


}).listen(8080);