//涉及1：怎么发送客户端的数据；2：服务器端怎么接受数据
var http = require('http');
var fs = require('fs');
var url = require('url');
var users = [];
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url,true);//本课程中学习的获取参数，到此只有用url模块
    //console.log(urlObj);              //true，请求参数串变成额一个对象
    if(urlObj.pathname == '/'){ //实体头，描写请求体的，content-type等
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./reg.html',function(err,data){
            res.end(data);
        })

    }else if(urlObj.pathname == '/reg'){
   //通过事件来接收，每当服务器接收到客户端发过来的一段数据时候会触发data事件
        var str = ' ';
        req.on('data',function(data){
            console.log(data)
            str += data.toString();
            console.log(str)
        })
        req.on('end',function(){
            console.log(str);
            users.push(JSON.parse(str)); //转为对象
            res.end(str);
        })
    }

}).listen(8080);