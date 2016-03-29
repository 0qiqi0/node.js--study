/**
 * Created by dell on 2016/3/28.
 */
var WebSocket=require('ws');
var ws=new WebSocket('ws://localhost:8080');

//连接成功后调用
ws.on('open',function(){
    ws.send('你好服务器')
});
//监听服务器发送来的消息
ws.on('message',function(data,flags){
    console.log(data);
})