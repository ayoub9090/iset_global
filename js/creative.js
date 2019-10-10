(function ($) {
  "use strict"; // Start of use strict

  $('[data-toggle="tooltip"]').tooltip(); 
  $("html").niceScroll({ zindex: 99999999 ,horizrailenabled:false});
  $('.selectpicker').selectpicker();
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if($('#ishomepage').val() == "1"){
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  }else{
    $("#mainNav").addClass("navbar-scrolled");
    $('body').addClass('innerClass');
  }

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

if ($(window).width() > 1200) {
  $('.nav-link.dropdown-toggle').on('click', function () {
    return false;
  });
}

function toggleMenu() {
  $('#navbarResponsive').toggleClass('openMenu');
}

/************************************VIDEO THINGS**************************************************** */
var myVideo = document.getElementById("postVideo");
/*$('#postVideo').on('click', function () {
  playPause()
})*/
$('.video_container--testomonial video').on('click', function () {
  playPauseMulti($(this).parents('.video_container--testomonial').find('a.playIcon_black'))
})

function playPauseMulti(el) {

  var myVideoo = el.parents('.item').find('video')[0];
  if (myVideo.paused) {
    myVideoo.play();
    $(myVideoo).prop('controls', true);
    el.parents('.item').find('.playIcon_black').fadeOut();
    el.parents('.item').find('.red_overlay').fadeOut();
  } else {
    myVideoo.pause();
    el.parents('.item').find('.playIcon_black').fadeIn();
    el.parents('.item').find('.red_overlay').fadeIn();
  }
}
function playPause() {

  if (myVideo.paused) {
    myVideo.play();
    $(myVideo).prop('controls', true);
    $('.playIcon').fadeOut();
  } else {
    myVideo.pause();
    $('.playIcon').fadeIn();
  }
}

$(document).ready(function () {
  $('.masthead').css('height', $(window).innerHeight());
  $('.sticky-scroll-language').css('left', $('.navbar-sticky-mobile').offset().left);
  $('.sticky-scroll-language').css('opacity', 1);
  $(".megamenu").on("click", function (e) {
    e.stopPropagation();
  });
  initTopBarSlider();
  //initSideBarSlider();
  doFooterOrder();
  doCountSection();
  if ($(window).width() > 767) {
    initCountriesSlider()
  }
  initGallery();
  initPartnerSlider();
  initTestomonialSlider();
  specialRow();
});
var appended = false;
function doFooterOrder() {
  if (!appended) {

    if ($(window).width() < 992) {
      $('.bg-footer .row-wrapped').each(function () {
        $(this).hide();
        $('.bg-footer>.container').append('<div class="row invisible-992"><div class="col-12">' + $(this).html() + '</div></div>');

      });
      appended = true;
    } else {
      if (!$('.bg-footer .row-wrapped').is(':visible')) {
        $('.bg-footer .row-wrapped').show();
      }
    }
  }
}
function initSideBarSlider() {
  if ($('.countries_main_slider-sidebar').length > 0) {
    if ($(window).width() < 768) {
      $('.countries_main_slider-sidebar').addClass('owl-carousel');
      $('.countries_main_slider-sidebar').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        margin: 5,
        rtl: true,
        items: 3,
        stagePadding: 20,
        responsiveClass: true
      })
    } else {
      if ($('.countries_main_slider-sidebar').hasClass('owl-loaded')) {
        $('.countries_main_slider-sidebar').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.countries_main_slider-sidebar').find('.owl-stage-outer').children().unwrap();
      }
    }
  }
}


function initTopBarSlider() {
  if ($('.countries_topBar_slider').length > 0) {
   
     // $('.countries_topBar_slider').addClass('owl-carousel');
      $('.countries_topBar_slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots: false,
        margin: 5,
        rtl: true,
        items: 8,
        responsiveClass: true,
        navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
        responsive: {
          0: {
            items: 3,
            margin: 10,
      
          },
          767: {
            items: 4,
            margin: 10
          },
          992: {
            items: 8,
          }
        }
      })
  }
}
function closeSection(el) {
  $(el).parents('section').slideUp(200);
  $('.assistant_box').css('bottom', '');
}

function specialRow() {
  if ($(window).width() > 992) {
    var fullHeight = $('.special-row > div:first-child .item').height();
    $('.special-row > div.half-50 .item').height(fullHeight / 2 - 15);
  } else {
    $('.special-row > div.half-50 .item').css('height', '');
  }
}


function initPartnerSlider() {
  if ($('.partner_slider').length > 0) {
    $('.partner_slider').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      nav: true,
      margin: 40,
      rtl: true,
      responsiveClass: true,
      navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
      responsive: {
        0: {
          items: 2,
          margin: 10,
          nav: false,
        },
        767: {
          items: 3,
          margin: 10
        },
        992: {
          items: 4,
        },
        1200: {
          items: 4,
        },
        1600: {
          items: 5,
        }
      }
    })
  }
}
function initGallery() {
  if ($('.gallery-row').length > 0) {
    if ($(window).width() < 768 ) {
    
      if (!$('.gallery-row').hasClass('owl-loaded')) {
        var divs = $(".gallery-row > div");
        for (var i = 0; i < divs.length; i += 4) {
          divs.slice(i, i + 4).wrapAll("<div class='item'></div>");
        }

        
          // $('.gallery-row').addClass('owl-carousel');
          $('.gallery-row').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            margin: 5,
            rtl: true,
            responsiveClass: true
          })
        
      }

    } else {
      /*if ($('.gallery-row').hasClass('owl-loaded')) {

        $('.gallery-row').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.gallery-row').find('.owl-stage-outer').children().unwrap();
        $('.gallery-row').find('.item').children().unwrap();
 
      }*/
      if (!$('.gallery-row').hasClass('owl-loaded')) {
        
       // $('.gallery-row').addClass('owl-carousel');
        $('.gallery-row').owlCarousel({
          loop: true,
          nav: false,
          items: 4,
          margin: 5,
          rtl: true,
          responsiveClass: true
        })
      }
    }
  }
}

function initTestomonialSlider() {
  if ($('.testomonial-slider').length > 0) {
    $('.testomonial-slider').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      nav: true,
      margin: 40,
      rtl: true,
      responsiveClass: true,
      navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
      responsive: {
        0: {
          items: 1,
          margin: 10,
          stagePadding: 55,
          nav: false
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
        1600: {
          items: 3,
        },
        1900: {
          items: 3
        }
      }
    })
  }

}
function closeBox(el) {
  $(el).parents('div').fadeOut();
}
function initCountriesSlider() {
  if ($('.countries_main_slider').length > 0) {
    $('.countries_main_slider').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      nav: true,
      margin: 0,
      rtl: true,
      responsiveClass: true,
      navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
      responsive: {
        0: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1600: {
          items: 6,
        },
        1900: {
          items: 7
        }
      }
    })
  }
}
$(window).resize(function () {
  //initSideBarSlider();
  initTopBarSlider();
  specialRow();
  doFooterOrder();
  $('.masthead').css('height', $(window).innerHeight());
  $('.sticky-scroll-language').css('left', $('.navbar-sticky-mobile').offset().left);
  $('.sticky-scroll-language').css('opacity', 1);
  if ($(window).width() < 767) {
    initGallery();
    $('.countries_main_slider').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    $('.countries_main_slider').find('.owl-stage-outer').children().unwrap();
  } else {
    initGallery();
    if (!$('.countries_main_slider').hasClass('owl-loaded')) {
      if (!$('.countries_main_slider').addClass('owl-carousel')) {
        $('.countries_main_slider').addClass('owl-carousel');
      }
      initCountriesSlider();
    }
  }
});


$(window).scroll(function () {

  doCountSection();

});

var a = 0;
function doCountSection() {
  if ($('.strength-section').length > 0) {
    var oTop = $('.strength-section').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }
  }
}

$(window).on('load', function () {
  setTimeout(function () {
    $('.help-bg').slideDown();
    setTimeout(function () {
      if ($('.help-bg').is(':visible')) {
        $('.assistant_box').css('bottom', $('.help-bg').height() + 40)
      }
      $('.assistant_box').fadeIn(200);
    }, 900);
  }, 1000)

  if ($('#vedio-bg-elem').length > 0) {
    $('#vedio-bg-elem')[0].play()
    $('.cover-bg').css('background', 'rgba(0,0,0,0.25)');
  }

});

$('#vedio-bg-elem').on('ended', function () {
  $('.bg-vedio').remove();
});