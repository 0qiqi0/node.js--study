/**
 * Created by dell on 2016/3/14.
 */
var http=require('http');

var server=http.createServer(function(req,res){
   res.write('小白');
    res.end(new Buffer('q'));
});
server.listen(8080,'localhost');