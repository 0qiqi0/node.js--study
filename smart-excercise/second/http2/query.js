var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url,true);//本课程中学习的获取参数，到此只有用url模块
    console.log(urlObj);              //true，请求参数串变成额一个对象
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname == '/apple'){ //实体头，描写请求体的，content-type等
        res.end(urlObj.query.num+"个苹果");
    }

}).listen(8080);