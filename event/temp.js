/**
 * Created by dell on 2016/3/16.
 */
function say(name,word){
    console.log(this.name,word);
}
//say('hello');
var obj={name:'zfpx'};
//var newSay=say.bind(null,'hello')
var newSay=say.bind(obj,'hello')
newSay('world')

//this：在全局函数中指window，函数作为对象属性运行时，this指当前对象。
//一般函数时候，this指执行环境，执行环境中包含变量对象和作用域链
