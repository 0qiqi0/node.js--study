//waterfall：是串行的，但是每个函数产生的返回值会传递给第二个函数
var async=require('async');
async.waterfall([
    function(cb){
        setTimeout(function(){
           //console.log(data);
            cb(null,'看电视');
        },1000);
    },
    function(data,cb){
        setTimeout(function(){
            //console.log(data)
            cb(null,data+'做作业');
        },1000);
    },
    function(data,cb){
        setTimeout(function(){
            cb(null,data+'睡觉');
        },1000);
    }
],function(err,result){//当上面两个异步任务 执行完后执行的回调
    console.log(err);
    console.log(result);
})