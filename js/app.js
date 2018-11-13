var spot = "";
var phone = $('.phone');
var content = "";
var screen = $('.screen');
var myVideo = document.getElementById("video1");
var englishAudio = document.getElementById("audio-eng");
var swedishAudio = document.getElementById("audio-swe");
var language = $('.selectLanguage').val();

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
    englishAudio.pause();
    swedishAudio.pause();
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
  var language = $('.selectLanguage').val();
  if (language === "finnish") {
    myVideo.play();
    $('button').addClass("hide");
    $('.selectLanguage').addClass("hide");
  } else if (language === "english") {
    myVideo.play();
    $('video').prop('muted', true);
    englishAudio.play();
    console.log(englishAudio);
    $('button').addClass("hide");
    $('.selectLanguage').addClass("hide");
    $('.disclamer').show();
  } else if (language === "swedish") {
    myVideo.play();
    $('video').prop('muted', true);
    swedishAudio.play();
    console.log(englishAudio);
    $('button').addClass("hide");
    $('.selectLanguage').addClass("hide");
    $('.disclamer').show();
  }
}

function deny() {
  content = $(".js-" + spot);
  content.addClass('hide');
  phone.addClass('hide');
  $('.overlay').addClass('hide');
  screen.removeClass(spot);
}
