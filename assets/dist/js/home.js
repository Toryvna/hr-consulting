$(document).ready(function(){
    //first slider
    function topSlider(number){
      $('#topSlider').slick({
          centerPadding: '20px',
          slidesToShow: 2,
          centerMode: false,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: number,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      });
    }
    topSlider($('#topSlider').data('speed'));

    //clients slider
    $('.clients__slider-text').slick({
        centerPadding: '0px',
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          }
        ]
    });

    //clients-logo slider
    function clients__slider(number){
      $('.clients__slider-logo').slick({
          centerPadding: '20px',
          slidesToShow: 5,
          arrows: true,
          dots: true,
          autoplay:true,
          autoplaySpeed: number,
          infinite: true,
          nextArrow: '<button class="slick-arrow next"><i class="icon-icon7"></i></button>',
          prevArrow: '<button class="slick-arrow prev"><i class="icon-icon10"></i></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                dots: false,
                centerPadding: '40px',
                slidesToShow: 3,
                nextArrow: '<button class="slick-arrow next"><i class="icon-icon7"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-icon10"></i></button>',
              }
            }
          ]
      });
    }
    clients__slider($('.clients__slider-logo').data('speed'));

    function checkResize(){
      if($(window).width() < 768 ) {
        $('.clients__slider-text').slick('slickGoTo', 1);
        $('.clients__slider-logo').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.clients__slider-text').slick('slickGoTo', nextSlide + 1);
        });
        $('.clients__slider-text').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.clients__slider-logo').slick('slickGoTo', nextSlide - 1);
        });
      }
      else {
        $('.clients__slider-text').slick('slickGoTo', 2);
        $('.clients__slider-logo').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.clients__slider-text').slick('slickGoTo', nextSlide + 2);
        });
        $('.clients__slider-text').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.clients__slider-logo').slick('slickGoTo', nextSlide - 2);
        });
      };
    };
    checkResize();
    $(window).resize(function(){
      checkResize();
    });

    // articles slider
    function articles__slider(number){
      $('.articles__slider').slick({
        centerPadding: '20px',
        slidesToShow: 3,
        centerMode: false,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: number,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              adaptiveHeight: false,
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
    articles__slider($('.articles__slider').data('speed'));


    //hide/show services dropmenu
    $(".has-drop").on('click', function(){
        $(this).find('.content').toggleClass('active');
    });

    //hide all services
    $(".hide-all").on('click', function(){
      $(".has-drop").find('.active').removeClass('active');
    });

    // animation numbers
    var stop = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (stop == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
            });
        });
        stop = 1;
      }
    });

    
    function handler2(event) {
      var hash = event.target.hash;
      // var hash = $(this).attr("href");
      if (hash) {
        if ($(hash).length) {
          event.preventDefault();
          var offset = $(hash).offset().top - 10;
          $('html, body').stop().animate({scrollTop: offset},'slow');
        }else{
        }
      }
    }
    $('#mainMenu a, .footer nav a').on( "click", handler2 );

    // Scroll to ID from another page
    var HashValue = location.hash; 
    location.hash = ''; 
    if(HashValue[1] != undefined){ 
      $('html, body').animate({scrollTop: $(HashValue).offset().top - 10}, 'slow');
    };
    //End Scroll to ID from another page


    //auto height 
    var maxHeight = 0;
    $(".clients__slider-text h5").each(function(){
      if ($(this).height() > maxHeight) { maxHeight = $(this).height() + 15; }
    });
    $(".clients__slider-text h5").height(maxHeight);
    


});


