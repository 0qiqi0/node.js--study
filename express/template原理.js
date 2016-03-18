/**
 * Created by dell on 2016/3/17.
 */
var express=require('express');

var app=express();

app.get('/',function(req,res){

});

function render(tmpl,data){
    tmpl.replace(/\{\{(\w)+\}\}/,function(input,group1){
        return
    })
}
var result=render('<h1>{{title}}}</h1>',{title:'欢迎'})
console.log(result);