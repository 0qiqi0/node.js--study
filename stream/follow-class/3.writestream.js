/**
 * Created by dell on 2016/3/13.
 */
var fs=require('fs');
var ws=fs.createWriteStream('./wrrite1.txt',{
    flags:'a',
    start:12
});
ws.write('你','utf8',function(){
    console.log(1,arguments);
});
ws.write('好','utf8',function(){
    console.log(2,arguments);
});
ws.end('再见','utf8');
pipe