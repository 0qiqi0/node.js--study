/**
 * Created by dell on 2016/4/25.
 */
var http = require('http');
http.createServer(function(req,res){
    res.setHeader('Content_Type','text/html:charset=utf-8');
    //res.write(Date.now().toString());
    console.log(req.url)
    var now = new Date();
    res.end(now.toString()); //响应的字符串只能是buffer或者string

}).listen(8080)