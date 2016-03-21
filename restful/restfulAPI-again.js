/**
 * Created by dell on 2016/3/21.
 */
/**
 * Created by dell on 2016/3/21.
 */
var express=require('express');
var path=require('path');
var bodyParse=require('body-parse');
var app=express();
app.set('view engine','ejs');
//指定模板存放的目录
//app.set('views',process.cwd()+'/views');
//path.resolve())获取当前目录的绝对路径
app.set('views',path.resolve());
app.set(bodyParse.urlencode({extended:true}))
//存放所有用户
var users=[{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
//1获取所有用户
app.get('/users',function(req,res){
    //希望知道客户端需要什么格式
    var accept=req.headers['accept'];
    //split得到的是个数组，但为了取得权重我们要得到对象，map用return后的值把每一个替换,得到新的数组
    var acceptType=accept.split(',').map(function(item){
        var values=item.split(';');
        return{
            type:values[0],
            q:values[1]?values[1].split('=')[1]:1
        }
    }).sort(function(a,b){
        return b.q-a.q; //需要降序排列
    })[0].type;
    console.log(accept);
    if(acceptType=='text/plain'){
        res.setHeader('Content-Type',acceptType)
        res.send(users);
    }else if(acceptType=='text/html'){
        res.setHeader('Content-Type',acceptType)
        res.render('users.ejs',{
            users:users
        })
    }else{
        res.send(users);
    }

    res.send(users); //send种可以接受对象，自动会转成json，发回浏览器端
});
//返回某个用户信息
//curl  http://localhost:8080/users/1
app.get('/users/:id',function(req,res){
    var id=req.params.id;
    //过滤一下，返回新的数组
    var filterUsers=users.filter(function(user){
        return user.id==id;
    });
    res.send(filterUsers.length>0?filterUsers[0]:'此用户不存在');
})

//新增加用户
//-X指定请求的方法 --data指定请求体的数据
//curl  -X POST --data "name=zfpx3" http://localhost:8080/users/1
app.post('/users',function(req,res){
    var addUser=req.body; //用了bodyparser后req出现了body
    if(addUser){
        //id是没有，由服务器端生成
        addUser.id=users[users.length-1].id+1;  //不懂
        users.push(addUser);
        //新增加一个资源的时候要返回新生产的完整对象
        res.send(addUser);
    }else{
        res.send({msg:'增加资源失败'});
    }


});
//整体更新全部属性
//crul -X PUT --data "id=2&name=zfpx20“ http://localhost:8080
app.put('/users/:id',function(){
    var putUser=req.body;
    if(putUser){
        for(var i=0;i<users.length;i++){
            //判断当前用户和用户传过来的要更新的用户id是否一致
            if(users[i].id==req.params.id){
                users[i]=putUser; //把老的对象整体替换成新的对象
                break;
            }
        }
        res.send(putUser);
    }else{
        res.send({msg:'更新资源失败'});
    }
})
//局部更新 请求体里只穿要更新的字段
//crul -X PATCH --data “name=zfpx200“ http://localhost:8080
app.patch('/users/:id',function(){
    var updateFields=req.body;
    if(updateFields){
            for(var i=0;i<users.length;i++){
                //判断当前用户和用户传过来的要更新的用户id是否一致
                if(users[i].id==req.params.id){
                    for(var attr in updateFields){
                        //用新的值替换久值.值更新独有属性，原型上不需要
                        if(updateFields.hasOwnProperty(attr))
                        users[i][attr]=updateFields[attr];
                    }
                    res.send(users[i]);
                    break;
                }
            }

    }else{
        res.send({msg:'更新资源失败'});
    }
});
//删除
//crul -X DELETE  http://localhost:8080/users/2
app.delete('/users/:id',function(req,res){
    for(var i=0;i<users.length;i++){
        if(users[i].id==req.params.id){
            users.splice(i,1);
            res.send({});//必须返回一个空资源
            return;
        }
    }
    //users=users.filter(function(user){return user.id!=req.params.id})
    res.send({msg:'删除失败'});
})
app.listen(8080);
