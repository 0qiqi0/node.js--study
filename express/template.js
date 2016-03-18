
var express=require('express');
var path=require('path');
var app=express();
//配置模板引擎
app.set('view engine','ejs');
//指定模板存放的目录
//app.set('views',process.cwd()+'/views');
//resolve先获取当前文件所在的绝对目录，然后再拼上后面得东西
app.set('views',path.resolve('views'));
//render有两个参数：第一个是模板的名字，第二个是数据的数据源
app.get('/',function(req,res){
    res.render('index',{title:'首页'});
})

app.get('/reg',function(req,res){
    res.render('index',{title:'注册'});
})

app.listen(8080);
