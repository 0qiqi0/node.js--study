/**
 * Created by dell on 2016/3/13.
 */
var http=require('http');
//指定请求的参数，完成去请求行和请求头
var options={
    host:'localhost',
    port:8080,
    path:'/post',
        method:'POST',
    headers:{}
}
//箱服务器发送请求
var request=http.request(options,function(res){
    console.log(res.statusCode);
    console.log(res.headers);

});
//request是一个可写流。此处指定请求体
request.write('{"name":"asd"')
request.write(',"age":8}')
request.write(JSON.stringify({name:'zfpx'}));
request.end();//当调用end方法是请求才会真正发出