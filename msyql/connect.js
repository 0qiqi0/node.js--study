/**
 * Created by dell on 2016/4/2.
 */
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'123456',
    database:'studb'
});
connection.connect();
var sql='select * from student';
//rows返回的记录，fields返回的字段
connection.query(sql,function(err,rows,fields){
    if(err){
        console.error(err);
    }else{
        console.log(rows);
        console.log(fields);
    }
});