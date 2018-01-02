/**
 * Created by information on 2017/9/30.
 */

// TODO 搜索框

placeholder_search = 'iphone8'

$(document).ready(function () {
    $('#serach .sou .sousuo input.kuang').focus(function () {
        $(this).val('');
    }).blur(function () {
       $(this).val(placeholder_search);
    });

// TODO 小金库和七日图切换

    setInterval(function () {
        $('#daohang .dhright .dhtu ul li').eq(dhtuIndex).addClass('on').siblings().removeClass()

    },2000);

    // TODO 浏览商品区域右边>
    $('#main .mainleft .liulan .liuright').hover(
        function () {
            $('#main .mainleft .liulan .liuright .righttu').css(
                {
                    backgroundImage : 'url(image/15.png)'
                }
            );
        }
    );

});


