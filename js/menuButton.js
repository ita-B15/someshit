/**
 * Created by up on 30.07.16.
 */
$(window).scroll(function() {

    var vidht = window.innerWidth;
    if (($(window).scrollTop() < 90 && vidht > 991) ||
        $(window).scrollTop() < 300 && vidht < 992)
    {
        $("#min-menu").hide();
    }
    else{
        $("#min-menu").show();
    }

});