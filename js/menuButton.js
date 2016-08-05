/**
 * Created by up on 30.07.16.
 */

$(document).ready(function () {
    $(window).scroll(function () {
        var win_widht = window.innerWidth;
        if (($(window).scrollTop() < 90 && win_widht > 991) ||
            $(window).scrollTop() < 300 && win_widht <= 991) {
            $(".btn-menu").hide();
            $(".dropdown_menu_ul").hide();
        }
        else {
            $(".btn-menu").show();
        }
    });
    $(".btn-menu").click(function () {
        $(".dropdown_menu_ul").toggle();
    });
});
/*Scroll-Top*/

function hideRocket() {
    $('.rocket').hide();
}
function hideExaust() {
    $('.exhaust').hide();

}
$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(document).scroll(function () {
        if ($(document).scrollTop() > 600) {
            $('.scrollToTop-V').fadeIn();
        } else {
            $('.scrollToTop-V').fadeOut();
        }
        if ($(document).scrollTop() == 0) {
            setTimeout(hideRocket(), 500);
            setTimeout(hideExaust(), 500);
        }
    });

    /*Click event to scroll to top*/

    var scrollTop = $('.scrollToTop-V');
    scrollTop.click(function () {
        $('html, body').animate({scrollTop: 0}, 2000);
        return false;

    });

    var win_height = $(document).height();

    var rocket = $('.rocket');
    scrollTop.click(function () {
        rocket.show();
        rocket.animate({bottom: -win_height + 650}, 0);
        rocket.animate({bottom: win_height}, 3000);
        return false;
    });

    var exhaust = $('.exhaust');
    scrollTop.click(function () {
        exhaust.css('top', win_height + 340);
        exhaust.show();
        return false;
    });

});