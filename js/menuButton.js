/**
 * Created by up on 30.07.16.
 */

$(document).ready(function(){
    $(window).scroll(function() {
        var win_widht = window.innerWidth;
        if (($(window).scrollTop() < 90 && win_widht > 991) ||
            $(window).scrollTop() < 300 && win_widht <= 991)
        {
            $(".btn-menu").hide();
            $(".dropdown_menu_ul").hide();
        }
        else{
            $(".btn-menu").show();
        }
    });
    $(".btn-menu").click(function() {
        $(".dropdown_menu_ul").toggle();
    });
});
