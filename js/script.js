$(document).ready(function ($) {

  $("#slider").owlCarousel({
    items: 1,
    loop: 5000,
    autoplay: true,
    animateOut: 'fadeOut'
  });

  $(window).load(function () {
    $("#slider img").liCover({
      parent: $("#slider"),
      position: 'absolute',
      veticalAlign: 'middle',
      align: 'center'
    })
  })
});