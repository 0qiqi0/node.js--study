var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url,true);//本课程中学习的获取参数，到此只有用url模块
    console.log(urlObj);              //true，请求参数串变成额一个对象
    if(urlObj.pathname == '/'){ //实体头，描写请求体的，content-type等
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./clock.html',function(err,data){
            res.end(data);
        })

    }else if(urlObj.pathname == '/clock'){
       // res.end(new Date().toLocaleString())
        res.statusCode = 404;
        res.end('404');
    }

}).listen(8080);