/**
 * Created by dell on 2016/3/14.
 */
var http=require('http');
var server=http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write(JSON.stringify(new Date()));//对象转为json字符串
    res.end(new Date().toLocaleString());
    //res。end写入的必须是buffer或者string类型。
}).listen(8080);