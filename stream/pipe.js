/**
 * Created by dell on 2016/3/16.
 */
var fs=require('fs');
function copy2(src,target){
    var rs=fs.createReadStream(src);
    var ws=fs.createWriteStream(target);
    //要先打开文件，然后读写文件，然后关闭文件。end为true时，写完关闭
    rs.pipe(ws,{end:true});
}
//实现pipe方法,略

copy2('./index.txt','./target.txt');
