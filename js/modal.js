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
});

$(window).scroll(function () {
  if ($(this).scrollTop() != 0) {
    $(".up").addClass("up_active");
  } else {
    $(".up").removeClass("up_active");
  }
});
