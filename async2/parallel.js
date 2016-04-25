//比如在获取数据和模板，同时获取，然后渲染
//result里面的顺序是一定的
var async=require('async');
async.parallel([
    function(cb){
        setTimeout(function(){
            //console.log('看电视');
            cb(null,'看电视');
        },3000);
    },
    function(cb){
        setTimeout(function(){
           // console.log('写作业');
            cb(null,'做作业');
        },3000);

    }

],function(err,result){//当上面两个异步任务 执行完后执行的回调
    console.log(err);
    console.log(result);
})