/**
 * Created by dell on 2016/3/16.
 */
function EventEmitter(){

}

EventEmitter.prototype.on=function(type,listener){

}

EventEmitter.prototype.once=function(type,listener){
    var flag=true;

    if(flag){
        this.emit(type);
        flag=false;
    }
    //这道题，想了很久，还是不会

}
EventEmitter.prototype.emit=function(type,listener){

}