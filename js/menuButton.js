
//    var min_menu = getElementById("min-menu");
$(window).scroll(function() {
    if ($(window).scrollTop() < 200) {
        $("#min-menu").hide();
    }
    else{
        $("#min-menu").show();
    }

});