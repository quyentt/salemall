$(document).ready(function () {
  var swiper = new Swiper(".banner-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ----------newspapers
  var swiper_newspapers = new Swiper(".newspapers-slide", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    freeMode: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // ----------product slider
  var swiper_product_nav = new Swiper(".product-nav-slide", {
    spaceBetween: 0,
    slidesPerView: "auto",
    freeMode: false,
    watchSlidesProgress: false,
  });
  var swiper_product_content = new Swiper(".product-content-slide", {
    autoHeight: true,
    spaceBetween: 0,
    navigation: false,
    thumbs: {
      swiper: swiper_product_nav,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
  // -------menu show
  $(".menu-mobi-toggle").click(function () {
    $(".menu-group").addClass("show");
  });
  $(".menu-mobi-close").click(function () {
    $(".menu-group").removeClass("show");
  });
  // --- header fix top
  var prevScrollTop = $(window).scrollTop();

  $(window).on("scroll", function (e) {
    var $src = $(".header");
    var currentScrollTop = $(this).scrollTop();

    if (currentScrollTop > 44) {
      $src.addClass("fixed");
    } else {
      $src.removeClass("fixed");
    }

    prevScrollTop = currentScrollTop;
  });
  // ---go top
  var btn = $(".go-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
});
