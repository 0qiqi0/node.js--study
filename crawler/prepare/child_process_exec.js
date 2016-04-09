/**
 * Created by dell on 2016/4/9.
 */
//子进程可以创建一个系统子进程，并执行shell命令

var child_process=require('child_process');

var spawn=child_process.exec;
//spawn没有回调，它获取数据是通过监听事件来获取。exec把整个命令放在第一个参数里
//spawn是每产生一点输出就会输出，而exec是全部获取完再执行回调，进行输出
//子进程都不会影响主进程的执行
//有些比较耗时的工作可以给子进程，因为node不适合做计算性的任务
var curl=exec('curl http://www.baidu.com',function(err,stdout,stderr){
    console.log(stdout);
});
console.log('continue')
