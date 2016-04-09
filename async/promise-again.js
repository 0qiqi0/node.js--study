/**
 * Created by dell on 2016/4/9.
 */
//延迟对象
var Defer=function(){
    var status='pending';
    var value;
    var callback;
    return {
        //调用resolve的时候表示成功了,异步完成之后调用
        resolve:function(_value){
            value=_value;
            status='resolve';
            callback(value);
        },
        promise:{
          then:function(_callback){
              callback= _callback
          }
        }
    }
}
var defer=Defer();
var fs=require('fs');
fs.readFile('1.txt','utf8',function(err,data){
    defer.resolve(data);
})
//当异步操作完成之后会调用你传给我的回调函数
var promise=defer.promise;
promise.then(function(data){
    console.log(data);
})
