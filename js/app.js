var spot = "";
var phone = $('.phone');
var content = "";
var screen = $('.screen');
var myVideo = document.getElementById("video1");

$('.overlay').on('click', function () {
  console.log("clicked");
  if (phone.hasClass('hide')) {
    console.log("show");
  } else {
    content = $(".js-" + spot);
    content.addClass('hide');
    phone.addClass('hide');
    $('.overlay').addClass('hide');
    screen.removeClass(spot);
    myVideo.pause();
  }
});

$('.hotspot').on('click', function () {
  spot = $(this).data('spot');
  content = $(".js-" + spot);
  console.log(content);
  content.removeClass('hide');
  phone.removeClass('hide');
  $('.overlay').removeClass('hide');
  screen.addClass(spot);
  $('button').removeClass("hide");
});

function answer() {
  myVideo.play();
  $('button').addClass("hide");
}

function deny() {
  content = $(".js-" + spot);
  content.addClass('hide');
  phone.addClass('hide');
  $('.overlay').addClass('hide');
  screen.removeClass(spot);
}
