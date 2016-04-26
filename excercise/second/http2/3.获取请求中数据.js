/**
 * Created by dell on 2016/4/25.
 */
var http = require('http');
http.createServer(function(req,res){
     console.log(req.method);
     console.log(req.url);
    console.log(req.headers);
   // res.write('try') 响应体必须在响应头后
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html;charset=utf8')
    res.end('over')
}).listen(8080)