/**
 * Created by dell on 2016/4/9.
 */
var CronJob=require('cron').CronJob;
var job=new CronJob('*/5 * * * * *',function(){
    console.log('每秒执行一次');
})
job.start()