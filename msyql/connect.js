/**
 * Created by dell on 2016/4/5.
 */
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    //默认port:3306,
    database:'test'
});

connection.connect();
var sql='select * from person';
//rows返回的记录，fields返回的字段
connection.query(sql,function(err,rows,fields){
    if(err)
       console.error(err);
    else{
        //console.log(rows);
       // console.log(fields);
        rows.forEach(function(row){
            console.log(row.name);
        })
    }m
});
var username='zs';
var password='123456';
var sql2="insert into user (username,password) values ("+username+","+password+")";
connection.query('sql2',function(err,rows){
    if(err)
        console.error(err);
    else{
        //console.log(rows);
        // console.log(fields);
        console.log(row);
    }
});