var async=require('async');

async.auto({
    mix:['water','flour',function(results,cb){
        //console.log(arguments)
        //console.log(results);
        cb(null,results.water+'+'+results.flour);
    }],
    steam:['mix',function(results,cb){
        cb(null,results.mix+'+'+'蒸')
    }],
       water:function(sb){
           console.time('cost')
           sb(null,'水')
           //console.log('1')
       },
       flour:function(cb){
           cb(null,'面粉')
       },
    //定义依赖关系,results是个对象

    }, function(err,result){//result是个对象
    console.timeEnd('cost')
    console.log(result);
});