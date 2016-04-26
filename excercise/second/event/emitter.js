/**
 * Created by dell on 2016/4/26.
 */
var EventEmitter = require('events');
var util = require('util');
//var e = new EventEmitter();
function Girl(name){
    this.name = name;
    EventEmitter.call(this) //不懂
}
//让girl能注册监听，发射事件，所以继承EventEmitter
util.inherits(Girl,EventEmitter);

var girl = new Girl();
girl.addListener('look',function(){
console.log('look')
})
girl.emit('look')