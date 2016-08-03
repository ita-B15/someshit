/**
 * Created by up on 30.07.16.
 */
$(window).scroll(function() {
    if ($(window).scrollTop() < 90) {
        $("#min-menu").hide();
    }
    else{
        $("#min-menu").show();
    }

});