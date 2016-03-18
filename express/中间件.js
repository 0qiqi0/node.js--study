
var express=require('express');

var app=express(); //app是配置对象，帮助我们配置
/*
*练习：计算任务的处理时间：在end上动手脚
 */
//使用中间件
//中央
app.use('/money',function(req,res,next){
    res.mny=100;
    res.start=Date.now();
    var originalEnd=res.end; //暂存原来的res。end方法
    res.end=function(){
        originalEnd.apply(res,Array.prototype.slice.call(arguments))
        console.log(Date.now()-res.start);
    }
    next();
});
//省里
app.use('/hello',function(req,res,next){
    res.mny=res.mny-10;
    next();
});
//市里
app.use(function(req,res,next){
    res.mny=res.mny-30;
    next();
});
app.get('/money',function(req,res){
    res.send(""+res.mny); //res.send(res.mny);则报错，因为不能接收数字
});

app.listen(3000);

