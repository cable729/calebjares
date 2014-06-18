(function(){
  'use strict';
  
  window.onload = function(){
    $('#title-box').transition({ opacity: 1, y: '220px' }, 500, 'ease'); 
    $('.block-header').fitText(1.15);
    
    animateChevron();
    setupFancyIcons();
    setupSmoothScroll();
    preloadImages();
  };
  window.onresize = function(){
    $('#intro-screen').height(window.innerHeight);
  };
  
  function setupFancyIcons(){
    $('.fancy-icon.spinner').hover(function(e){
      $(this).transition({ borderRadius: '30px' }, 200, 'ease');
    }, function(e){
      $(this).transition({ borderRadius: '4px' }, 200, 'ease');
    });
  };

  function animateChevron(){
    var chevron = $('.arrow');
    animateIt();
    function animateIt(){
      chevron
            .transition({ y: -10 }, 1000, 'ease')
            .transition({ y: 0 }, 1000, animateIt);
    };
  };

  function preloadImages(){
    $('.slideshow-image').imageloader({ background: true, });
  };

  function setupSmoothScroll(){
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  };

  function preloadImages(){
    var numLoaded = 0;
    var imgDivs = $('.slideshow-image:not(:first)');
    imgDivs.hide().imageloader({
      background: true,
      callback: function(e){
        if (++numLoaded === imgDivs.length){
          startSlideshow();
        }
      }
    })
  };

  function startSlideshow(){
    var imgDivs = $('.slideshow-image');
    var pointer = 0;
    setInterval(function(){
      imgDivs.eq(pointer).fadeOut(2000);
      imgDivs.eq((pointer + 1) % imgDivs.length).fadeIn(2000);
      pointer = (pointer + 1) % imgDivs.length;
    }, 8000);
  };
})();
