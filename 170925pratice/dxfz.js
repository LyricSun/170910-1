/**
 * Created by information on 2017/9/26.
 */
var HDL = {
    chuang_jian_ele : function (tag_name,content,parent_ele) {
        var i = document.createElement(tag_name);
        i.innerHTML = content;
        parent_ele.appendChild(i);
    }

};