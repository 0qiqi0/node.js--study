/**
 * Created by dell on 2016/3/14.
 */
var http=require('http');
var server=http.createServer(function(req,res){
   console.log(req.method);
    console.log(req.url);
    console.log(req.headers); //请求头，返回的是一个对象

    res.statusCode=404;
    res.setHeader('Content','text/html;charset=utf-8');
    res.write('hello world'); //写入响应体
    //这样写错误，res.setHeader('Content','text/html;charset=utf-8');
    res.end('over');

   // res.setHeader('Content-Type','text/html;charset=utf-8');
    //res.write(JSON.stringify(new Date()));//对象转为json字符串
    //res.end(new Date().toLocaleString());

}).listen(8080);