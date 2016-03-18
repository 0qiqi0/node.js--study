/**
 * Created by dell on 2016/3/16.
 */
var fs=require('fs');
//创建可读流，触发事件有三个，data，edn，error
var rs=fs.createReadStream('./index.txt',{
    start:3,
    end:8,//包前包后
    highWaterMark:2  //单位是字节
});
//已经继承了eventemiter,data判断是否得到数据，end看是否得完，function是如何处理
rs.setEncoding('utf8')
rs.on('data',function(data){
    //pause 停止喂饭.生产者和消费者传输数据和接受数据的速度要保持一致
    rs.pause();
    setTimeout(function(){
        console.log(data)
        rs.resume()
    },1000)
})

rs.on('end',function(){
    console.log('end')
})
rs.on('error',function(err){
    console.log(err)
})

/**
 * node中如何判断错误
 * 1 同步方法，try-catch
 * 2 异步，判断回调函数里error对象是否有值
 * 3 在流里判断错误，监听它的error事件
 */
