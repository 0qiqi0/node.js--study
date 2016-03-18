
/**
 * Created by dell on 2016/3/12.
 */
var querystring=require('querystring');
var s ='name-zfpx&age=8';
console.log(querystring.parse(s));
console.log(querystring.stringify(querystring.parse(s)));