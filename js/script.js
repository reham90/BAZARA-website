let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();



  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
      $(".img-logo").toggleClass("filter-logo");
      $(".language-dropdown").toggleClass("visible");
      $(".search-content").toggleClass("visible");
     
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".nav-head .close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });
  
 
   //slide down menu
   $(".menu-item-has-children a").click(function(e) {
         
    $(this).siblings(".sub-menu ").slideToggle(400);
  //   $(".menu-item-has-children a").not(this).siblings(".sub-menu ").slideUp(400);
    if ($(window).width() <= 991) {
     
        $(this).toggleClass("active");
        $(".menu-item-has-children a").not(this).removeClass("active");
    }
});
}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

 


 ///////// **clients-seller-section** /////////
 var specials = new Swiper(".clients-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".clients-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".clients-slider .swiper-btn-next",
    prevEl: ".clients-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 1,
    },
  },
});


  
 
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });




 ///////// **vedio-section** /////////

 var screen2 = new Swiper(".vedio-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".vedio-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vedio-slider .swiper-btn-next",
    prevEl: ".vedio-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
      
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 68,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});





});

