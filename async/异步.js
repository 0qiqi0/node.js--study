
var fs =require('fs');

/*
var filename=fs.readFileSync('1.txt','utf8');
console.log(filename);
var content=fs.readFileSync(filename,'utf8');
console.log(content);*/

fs.readFile('1.txt','utf-8',function(err,data){
    console.log(data)
    fs.readFile(data,'utf8',function(err,data){
        console.log(data)
    })
});










/*
var fs=require('fs');
fs.readFile('A.txt','utf8',function(err,data){
    fs.readFile(data,'utf8',function(err,data){
        console.log(data)
    })
})


var event=require('events');
var eventMitter=new event();
var fs=require('fs');

eventMitter.on('start',function(data){
    fs.readFile(data,'utf8',function(err,data){
        console.log(data);
    })
});
fs.readFile('A.txt','utf8',function(err,data){
    eventMitter.emit('start',data);
});*/













