/**
 * Created by information on 2017/9/27.
 */

var dialog = {

    success : function (msg,url) {
        layer.open({
            title : '提示',
            content : 'msg',
            icon : '1',
            yes : function () {
                window.location.href = url;
            }
        });
    },

    error : function (msg,url) {
        layer.open({
            title : '提示',
            content : 'msg',
            icon : '2',
            yes : function () {
                window.location.href = url;
            }
        });
    }
};