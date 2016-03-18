/**
 * Created by dell on 2016/3/17.
 */
var express=require('express');
var path=require('path');
var app=express();
//app.use(function(req,res,next){});
app.use(express.static(__dirname+'/public'));
app.listen(8080);