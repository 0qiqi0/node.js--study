/**
 * Created by dell on 2016/3/16.
 */
var http=require('http');
//指定请求参数
var options={  //完成请求行和请求头
    host:'localhost',
    port:8080,
    path:'/post',
    method:'POST',
    headers:{}
}
var request=http.request(options,function(res){
    console.log(res.statusCode); //读取响应码
    console.log(res.headers);//读取响应头
    var result=''
    res.on('data',function(data){//每接受到数据都触发data事件
        //console.log('data:',data);
        result+=data;
    })
    res.on('end',function(){
        var users=JSON.parse(result); //为什么要转成对象？
        console.log(users);

    });

})
//request是个可写流，请求体通过write和end方法指定.发送请求体
request.write('{"name":"zfpx"');
request.write(',"age":6}');
request.end();//当调用end方法时请求词汇真正发出