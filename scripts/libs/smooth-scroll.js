$(function () {
  var navHeight = 60;
  $('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    // var position = target.offset().top-navHeight;
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});