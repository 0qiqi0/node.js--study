/**
 * Created by dell on 2016/3/13.
 */
var express=require('express');

var app=express();//运行后得到一个app（对象），用来配置express

var app=express();
//配置路由
//当用户访问/的时候，会执行后面得回调函数
app.get('/',function(req,res){
    //可以自动判断参数类型，自动转换响应信息，res。end方法只能buffer或者string
    //此方法可以接受任何类型，并自动设置content-type
    res.send('home');
});
app.get('/',function(req,res){

    res.send('hello');
});
app.listen(3000);