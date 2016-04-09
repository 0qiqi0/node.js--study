
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

