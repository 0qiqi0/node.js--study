//获取网页内容
var request=require('request');
//将网页的gbk编码的buffer转换成utf8
var iconv=require('iconv-lite');
request({url:'http://top.baidu.com/category?c=10&fr=topindex',encoding:null},function(err,response,body){
    //console.log(body);
    var result=iconv.decode(body,'gbk'); //拿到原来是gbk的buffer转成utf-8
    console.log(result);
})