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
    });

    /*Click event to scroll to top*/
    var winScrollTop = $('.scrollToTop-V');

    var rocket = $('.rocket');

    var exhaust = $('.exhaust');

    var scrollFromTop = $(document).scrollTop();

    winScrollTop.click(function () {
        doc_height = $(document).height();
        win_height = $(window).height();
        scrollFromTop = $(document).scrollTop();
        exhaust.css('top', (scrollFromTop + win_height - 330));
        rocket.css('top', (scrollFromTop + win_height -480));
        rocket.fadeIn(300);
        exhaust.fadeIn(100);
        $('html, body').animate({scrollTop: 0}, {duration: 3500, easing: "swing"});
        rocket.animate({top: -450}, {duration: 3500, easing: "swing"});
        rocket.fadeOut();
        exhaust.fadeOut(2000);

        return false;
    });
});
