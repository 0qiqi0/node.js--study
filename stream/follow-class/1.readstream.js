/**
 * 创建可读流
 */
var fs =require('fs');
var rs =fs.createReadStream('./index.txt',{
    start:3,
    end:8,
    highWaterMark:4 //每次读几个字节
});
rs.setEncoding('utf8');
//监听data事件，当读到数据时会触发end事件
rs.on('data',function(data){
    console.log('得到了数据',data); //没指定编码，返回的二进制buffer
    console.log('得到了数据',data.toString());
});
rs.on('end',ss);
function ss(){
    console.log('end');
}
//读取错误时触发error事件
rs.on('error',function(){
    console.error(err);
})
/**
 *读取文件错误处理
 * 1. 同步方法 try catch
 * 2. 异步 判断回调函数里的error对象是否有值
 * 3. 在流里判断错误，监听 它的 error事件
 */
