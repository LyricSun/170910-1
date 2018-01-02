/**
 * Created by information on 2017/9/27.
 */
var EventHandle = {
    addEvent : function (ele,type,eventhandle) {
        if(ele.addEventListener){
            ele.addEventListener(type,eventhandle,false);
        }
        else {
            ele.attachEvent('on' + type,eventhandle);
        }
    },

    // removeHandle :
};