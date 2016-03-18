/**
 * Created by dell on 2016/3/17.
 */
var express=require('express');

var app=express(); //app是配置对象，帮助我们配置
//配置路由
app.get('/',function(req,res){
    res.send('hello world'); //send是express提供的，当用户访问/时候，会执行后面得回调函数
});//它可以自动判断参数类型，自动转换响应信息，并且自动设置content-type
//send中包含了end，匹配到之后后面得就不匹配了
//启动服务器
app.get('/hello',function(req,res){
    res.send('hello world2'); //send是express提供的，当用户访问/时候，会执行后面得回调函数
});
app.all('/',function(req,res){
    res.send('all hello world'); //send是express提供的，当用户访问/时候，会执行后面得回调函数
});
app.listen(3000);

