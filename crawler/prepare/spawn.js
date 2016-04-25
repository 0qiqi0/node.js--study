//子进程可以创建一个系统子进程，并执行shell命令

var child_process=require('child_process');

var spawn=child_process.spawn;
//开启一个子进程执行一个命令,第一个参数：命令的名字，第二个是命令参数传到命令里去
var subprocess=spawn('curl',['http://www.baidu.com']);
//监听标准输出的事件。可读流可以监听data
//子进程和主进程是同时执行的，子进程获取到数据后给主进程显示。
subprocess.stdout.on('data',function(data){
    console.log(data);
})

subprocess.on('exit',function(){
    console.log('活干完了')
})
console.log('continue')
