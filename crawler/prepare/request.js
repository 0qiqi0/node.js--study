/**
 * Created by dell on 2016/4/2.
 */
var request=require('request');
var iconv=require('iconv-lite');
request({url:'http://top.baidu.com/category?c=10&fr=topindex',encoding:null},function(err,response,body){

    var result=iconv.decode(body,'gbk'); //拿到原来是gbk的buffer转成utf-8
    console.log(result);
})