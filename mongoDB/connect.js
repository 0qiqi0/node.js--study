/**
 * Created by dell on 2016/3/20.
 */
/*
*3 连接数据库 mongod 服务器端，mongo客户端
 */
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://123.57.143.189:27017/gqz");
//一个实例下的数据库zfpx。如果没有这个数据库也能成功，前面的一段对就行
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
//定义一个schema，描述此集合里有哪些字段，字段是什么类型，相当于mysql里面的表结构
var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    time : { type:Date, default:Date.now },
    email: { type:String,default:''}
});
//创建model，他是依赖shcema的，可以用他来操作数据库中的person集合，针对集合的
//有就用这个集合，没有就创建这个集合
var PersonModel = db.model("gqz1", PersonSchema);
//根据模型创建实体，是指的个体对象。是针对单个文档的
var personEntity = new PersonModel({
    name : "zfpx",
    age  : 6,
    email: "zfpx@qq.com"
});
//不在shema中声明的属性是无法保存的
personEntity.save(function(error,doc){
    if(error){
        console.log("error :" + error);
    }else{
        console.log(doc);
    }
});