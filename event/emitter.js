/**
 * Created by dell on 2016/3/16.
 */
var EventEmitter=require('events');
//一般不这么用var e=new EventEmitter();
var util=require('util');
function Girl(name){
    this.name=name;
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter)

var girl=new Girl();
function Boy(name){
    this.name=name;
    this.say=function(words){
        console.log(words);
    }
}
var xiaoming=new Boy('小明');
var xiaohua=new Boy('小花');
girl.addListener('look',function(){
    console.log('look');
});
//一下两行都是注册监听事件
girl.addListener('look',xiaoming.say.bind(xiaoming,'喜欢就买'));
girl.on('look',xiaohua.say.bind(xiaohua,'哈哈'));
girl.emit('look'); //浏览比如通过点击啦触发，但是在node中可以通过代码来触发
//此绑定的事件指触发一次
var s = function(){
    console.log('吃饭');
}
girl.once('饿了',s)
girl.emit('饿了')
girl.emit('饿了')
girl.emit('饿了')

girl.removeListener('look',s)
girl.emit('饿了')

//girl.removeAllListeners('look')
girl.emit('look');