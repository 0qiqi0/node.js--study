var fs=require('fs');
var EventEmitter=require('events');
var file=new EventEmitter();

file.on('start',function(data){
    fs.readFile(data,'utf8',function(err,data){
        console.log(data)
    })
})
fs.readFile('1.txt','utf8',function(err,data) {
    file.emit('start', data);
})
/*
fs.readFile('1.txt','utf-8',function(err,data){
    console.log(data)
    fs.readFile(data,'utf8',function(err,data){
        console.log(data)
    })
});
*/

