/**
 * Created by dell on 2016/3/16.
 */
var fs=require('fs');
//只有start，咩有end
var ws=fs.createWriteStream('./write.txt',{
    flags:'a', //不清空原来的文件进行追加
    start:12
});
ws.write('好','utf8',function(){//写的时候是异步的
    console.log(arguments);
})
ws.write('好','utf8',function(){//写的时候是异步的
    console.log(arguments);
})
//写入并且关闭
ws.end('学习','utf8');