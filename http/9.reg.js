
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var path=require('path');
var url=require('url');
var users=[];
var server=http.createServer(function(req,res) {
    var urlObj = url.parse(req.url,true);   //url：index.html?name=zfpx&age=6
    if(urlObj.pathname=='/'){
        res.writeHead(200,{'Content_type':'text/html;charset:utf-8'})
        fs.readFile('./reg.html',function(err,data){
            res.end(data);
        })
    }else if(urlObj.pathname=='/reg'){
        //每当服务器收到客户端发过来的一段数据时就会触发data事件
        var str=''
        req.on('data',function(data){
            str+=data.toString();
        });
        //当所有的数据全部接受完毕会触发end事件，
        req.on('end',function(){
            console.log(str);   //json格式的字符串
            //转成对象追加到用户列表
            users.push(JSON.parse(str));   //json字符串到对象
            //最后返回用户列表
            //错误res.end(JSON.parse(str));
            res.end(str);   //返回对象
            console.log(str);
        });
    }
}).listen(8080);
//responseText相当于把响应转化为字符串