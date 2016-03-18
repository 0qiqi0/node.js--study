/**
 * Created by dell on 2016/3/12.
 */
var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring = require('querystring');
http.createServer(function(req,res){
    //一定会返回对象
    //true的话urlObj的query一回事一个对象，否则是一个字符串
    //username=zsd&password=123  ->{username:}
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/'){
        fs.readFile('./index.html','utf-8',function(err,data){
            res.end(data);
        })
    }else if(pathname=='/reg'){{
        var result='';

        req.on('data',function(data){
            result+=data;
        })
        req.on('end',function(data){
           var obj =querystring.parse(result);
            console.log(obj);
            res.end('ok');

        })
    }}
}).listen(8080);