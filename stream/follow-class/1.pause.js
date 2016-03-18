/**
 * 创建可读流
 */
var fs =require('fs');
var rs =fs.createReadStream('./index.txt',{
    start:3,
    end:8,
    highWaterMark:2 //每次读几个字节
});
rs.setEncoding('utf8');
//监听data事件，当读到数据时会触发end事件
//pasuse 停止喂
rs.on('data',function(data){
    //吃一口要求暂停
    rs.pause();
    setTimeout(function(){
        console.log(data);
        rs.resume();
    },1000)
});
rs.on('end',function(){
    console.log('end');
})
//读取错误时触发error事件
rs.on('error',function(){
    console.error(err);
})
/**
 *读取文件错误处理
 * 1 同步方法  try-catch
 * 2
 * 3
 */
