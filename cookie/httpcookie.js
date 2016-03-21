/**
 * Created by dell on 2016/3/19.
 */
var http=require('http');

http.createServer(function(req,res){
    if(req.url=='/write'){
        //响应头 实体头，扩展头（自定义头）
        res.setHeader('Set-Cookie','name=zfpx');
        res.end('ok')
    }else if (req.url=='/read'){
        console.log(req.headers);
        console.log(req.headers.cookie);
        res.end(req.headers.cookie)
    }
}).listen(8080);