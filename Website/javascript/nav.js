$(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
          $('.menu').addClass("sticky");
        } else {
            $('.menu').removeClass("sticky");
          }
      });

