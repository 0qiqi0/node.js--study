/**
 * Created by dell on 2016/4/2.
 */
    //在服务器端实现 jquery的dom的api
var cheerio=require('cheerio');
var $ =cheerio.load('<h1 class="title">你好奇奇</h1>')
$('h1.title').text('hello node.js');
$('h1.title').addClass('welcome');
console.log($.html()); //转成html字符串