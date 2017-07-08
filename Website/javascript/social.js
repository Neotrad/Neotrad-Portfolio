$(window).scroll(function(){
        if ($(this).scrollTop()>900){
          $('.menu').addClass("sticky");
        }
        else
          {
            $('.menu').removeClass("sticky");
          }
      })

//$(function() {
//   $(window).scroll(function () {
//      if ($(this).scrollTop() > 1000) {
//         $('.menu').addClass("changeColor-two")
//      }
//      if ($(this).scrollTop() < 1000) {
//         $('.menu').removeClass("changeColor-two")
//      }
//   });
//});

$(window).scroll(function(){
        if ($(this).scrollTop()>1000){
          $('.menu').addClass("changeColor");
        }
        else
          {
            $('.menu').removeClass("changeColor");
          }
      })





