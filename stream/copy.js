/**
 * Created by dell on 2016/3/16.
 */
function copy(src,target){
    var fs=require('fs');
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(target);

    rs.setEncoding('utf8');
    rs.on('data',function(){

    })
    rs.on('end',function(){

    })
}

copy('./index.txt','target.txt');