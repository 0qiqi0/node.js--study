/**
 * Created by dell on 2016/4/26.
 */
//浏览器端的window代理的是global，因为不能直接访问global
//全局对象：console，setTimeout,setInterval,setImmediate(node特有).
//全局属性不用引入不用声明，属性公用
//process:当前进程。cwd：current working directory；
//console.log(global);
//console.log(process);
console.log(process.cwd());
process.chdir('txt') //不想更改1.txt就该当前的工作目录
var fs =require('fs');
console.log(fs.readFileSync('1.txt','utf8'))
