/**
 * Created by up on 30.07.16.
 */

$(document).ready(function () {
    $(document).scroll(function () {
        var win_widht = $(window).width();
        if (($(document).scrollTop() < 90 && win_widht > 991) ||
            $(document).scrollTop() < 300 && win_widht <= 991) {
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

    var win_height = $(document).height();

    //Check to see if the window is top if not then display button
    $(document).scroll(function () {
        if ($(document).scrollTop() > win_height * 0.7) {
            $('.scrollToTop-V').fadeIn();
        } else {
            $('.scrollToTop-V').fadeOut();
        }
        if ($(document).scrollTop() == 0) {
            hideRocket();
            hideExaust();
        }
    });

    /*Click event to scroll to top*/
    var scrollTop = $('.scrollToTop-V');

    scrollTop.click(function () {
        $('html, body').animate({scrollTop: 0}, 2500);
        return false;

    });

    var rocket = $('.rocket');
    scrollTop.click(function () {
        rocket.fadeIn();
        rocket.animate({bottom: -win_height + 950}, 0);
        rocket.animate({bottom: win_height + 950}, 3500);
        return false;
    });
    var exhaust = $('.exhaust');
    scrollTop.click(function () {
        exhaust.css('top', win_height - 300);
        exhaust.fadeIn();
        return false;
    });
    console.log(win_height);

});
