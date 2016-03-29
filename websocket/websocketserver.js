/**
 * Created by dell on 2016/3/28.
 */
var Server=require('ws').Server;
var wss=new Server({
    port:8080

});
//当有客户端连接来的时候调回调
wss.on('connection',function(ws){
    ws.on('message',function(message){
        console.log('服务器接收到:%s',message);
       //服务器端向客户端发信息
        ws.send('服务器回复:'+message);
    })
})