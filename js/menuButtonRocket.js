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

    var doc_height = $(document).height();
    var win_height = $(window).height();

    //Check to see if the window is top if not then display button
    $(document).scroll(function () {
        if ($(document).scrollTop() > (doc_height - win_height) * 0.5) {
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
    var winScrollTop = $('.scrollToTop-V');

    winScrollTop.click(function () {
        $('html, body').animate({scrollTop: 0}, 2000);
        return false;

    });

    var rocket = $('.rocket');
    winScrollTop.click(function () {
        rocket.show();
        rocket.animate({bottom: -$(document).scrollTop() + win_height * 0.4}, 0);
        rocket.animate({bottom: ($(document).scrollTop() )}, 3000);
        return false;
    });
    var exhaust = $('.exhaust');
    winScrollTop.click(function () {
        exhaust.css('top', $(document).scrollTop() + win_height * 0.55);
        exhaust.fadeIn();
        return false;
    });
    console.log(doc_height);
    console.log(win_height);
    console.log($(document).scrollTop());

});
