(function(){
  'use strict';
  
  $(function(){
    animateChevron();
    setupFancyIcons();
    setupSmoothScroll();
    preloadImages();
    $('.block-header').fitText(1.15);
  });
  
  window.onload = function() {
    startSlideshow();
  };
  
  window.onresize = function(){
    $('#intro-screen').height(window.innerHeight);
  };
  
  function setupFancyIcons(){
    $('.fancy-icon.square-to-circle').hover(function(e){
      $(this).transition({ rotate: '0.25turn' }, 300, 'ease');
    }, function(e){
      $(this).transition({ rotate: '0turn' }, 300, 'ease');
    });
    $('.fancy-icon.spin').hover(function(e){
      $(this).transition({ borderRadius: '30px', rotate: '-0.5turn' }, 400, 'ease');
    }, function(e){
      $(this).transition({ borderRadius: '4px', rotate: '0turn' }, 400, 'ease');
    });
    $('.fancy-icon.flip').hover(function(e){
      $(this).transition({ rotateX: '-0.5turn' }, 400, 'ease');
    }, function(e){
      $(this).transition({ rotateX: '0turn' }, 400, 'ease');
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

  function setupSmoothScroll(){
    $('a').smoothScroll();
  };

  function preloadImages(){
    var imgDivs = $('.slideshow-image:not(:first)');
    imgDivs.hide().imageloader({ background: true });
  };

  function startSlideshow(){
    var divs = $('.slideshow-image');
    var pointer = 0;
    setInterval(function(){
      divs.eq(pointer).fadeOut(2000);
      divs.eq((pointer + 1) % divs.length).fadeIn(2000);
      pointer = (pointer + 1) % divs.length;
    }, 8000);
  };
})();
