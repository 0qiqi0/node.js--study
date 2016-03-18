/**
 * Created by dell on 2016/3/13.
 */
var express=require('express');

var app=express();//运行后得到一个app（对象），用来配置express
//使用中间件
app.use('/money',function(req,res,next){
    res.mny=100;
    next();
});
//计算一个处理请求一共花了多少时间
//开始时间
app.use(function(req,res,next){
    res.stat=Date.now();
    var end=res.end;
    res.end=function(){
        end.apply(res,Array.prototype)
    }
    next();
});
app.use('/touch',function(req,res,next){
    res.mny=res.mny-10;
    next();
});

 app.get('/end',function(req,res){
     res.send(""+res.mny);//send里面不能是数字
 })
app.listen(8080);