/**
 * Created by dell on 2016/4/26.
 */
var util= require('util');
function Parent(){
    this.name='father';
    this.age = 50;
    this.say=function(){
        console.log(this.name);
    }
}
Parent.prototype.showName=function(){
    console.log('show',this.name);
}
function Child(){
    Parent.call(this)
    this.name='child';

}
util.inherits(Child,Parent); //其实就是原型继承
var c = new Child;
console.log(c);
c.showName()
//将任意一个对象转成字符串
console.log(util.inspect(c));