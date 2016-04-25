/**
 * Created by dell on 2016/4/25.
 */
//发送http请求前要建立连接，3次握手，4次断开。完成后就可以发送http请求了
var http = require('http');
http.createServer(function(req,res){
    res.write(Date.now().toString());
    console.log(req.url)
    res.end(new Date().toString()) //响应的字符串只能是buffer或者string

}).listen(8080)