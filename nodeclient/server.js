/**
 * Created by dell on 2016/3/16.
 */
var http=require('http');
var users=[];
http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.url);
    req.setEncoding('utf8'); //设置请求编码
    var result='';
    req.on('data',function(data){//每接受到数据都触发data事件
        //console.log('data:',data);
        result+=data;
    })
    req.on('end',function(){
        var user=JSON.parse(result); //为什么要转成对象？
        users.push(user); //user是个对象
        res.end(JSON.stringify(users)); //write只能支持buffer和字符串

    });



}).listen(8080);