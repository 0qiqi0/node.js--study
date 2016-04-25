/**
 * Created by dell on 2016/4/10.
 */
//此方法可以用来执行一个文件
    //子主进程之间还能通过message事件来交互
var child_process=require('child_process');
var execFile=child_process.execFile;
console.log(process.execPath);
execFile(process.execPath,['client.js'],function(err,stdout,stderr){
    console.log(stdout);
});
console.log('子进程是否结束不耽误主进程的执行');
///不会有输出，因为是当执行完才回调