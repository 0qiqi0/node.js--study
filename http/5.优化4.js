/**
 * Created by dell on 2016/3/14.
 */
var http=require('http');
var fs=require('fs');
var mime={
    '.html':'text/html',
    '.js':'text/javascript',
    '.css':'text/css'
}
var path=require('path');
var server=http.createServer(function(req,res){
    var url=req.url;
        console.log(path.extname(url));
        res.setHeader('Content-Type',mime[path.extname(url)]+';charset=utf-8');
        fs.readFile('.'+url,'utf8',function(err,data){
            res.write(data);
            res.end();
        })

}).listen(8080);