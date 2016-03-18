/**
 * Created by dell on 2016/3/13.
 */
var http =require('http')
var users=[];
/**
 *1 客户端把一个用户信息发送给我服务器
 * 2 服务器接收到后追加到users数组中
 * 3 吴福气返回user
 */

http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.url);
    req.setEncoding('utf8')
    req.on('data',function(data){
        console.log('data:',data);
    })
    res.setHeader('name','zfpx');//自定义头（请求头，响应头，通用头，自定义头）
    res.setHeader('age','6');
    res.end('over');
}).listen(8080);