var button = $("#button");
var modal = $("#modal");
var close = $("#close");
$(document).ready(function () {
  button.on("click", function () {
    modal.toggleClass("modal_active");
  });
  close.on("click", function () {
    modal.toggleClass("modal_active");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });
  $('.up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700);
  });
});