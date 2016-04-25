//串行执行异步任务（cb函数使我们知道啥时候执行完了func函数，一个cb的
// 第一个参数err不为空，则不执行下一个函数）:任务列表有两种：1放一些异步的函数
//2放一个对象，但是此时执行顺序无法控制了
var async=require('async');
async.series([
    function(cb){
        setTimeout(function(){
            //console.log('看电视');
            cb(null,'看电视');
        },3000);
    },
    function(cb){
        setTimeout(function(){
            //console.log('写作业');
            cb(null,'做作业');
        },3000);

    }

],function(err,result){
    console.log(err);
    console.log(result);
})