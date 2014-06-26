(function(){  
  $(function(){
    animateChevron();
    setupFancyIcons();
    setupSmoothScroll();
    setupKnobs();
    setupKnobAnimations();
    setupEvents();
    doResize();
    carouselNormalization();
    setupExtra();
    
    $('.block-header').fitText(1.15, { minFontSize: '56px' });
  });
  
  window.onresize = doResize;
  
  function doResize() {
    $('#intro-screen').height(window.innerHeight);
  }
  
//  thanks to https://coderwall.com/p/uf2pka
  function carouselNormalization() {
    var items = $('#portfolio-carousel .item'), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    if (items.length) {
        function normalizeHeights() {
            items.each(function() { //add heights to array
                heights.push($(this).height()); 
            });
            tallest = Math.max.apply(null, heights); //cache largest value
            items.each(function() {
                $(this).css('min-height',tallest + 'px');
            });
        };
        normalizeHeights();

        $(window).on('resize orientationchange', function () {
            tallest = 0, heights.length = 0; //reset vars
            items.each(function() {
                $(this).css('min-height','0'); //reset min-height
            }); 
            normalizeHeights(); //run it again 
        });
    }
    }
  
  function setupEvents() {
    $('.make-it-happen').click(function() {
      $.smoothScroll({
        scrollTarget: '#contact-me'
      });
      return false;
    });
  }
  
  function setupKnobAnimations() {
    $('.skill').hover(
      function over() {
        if (!$(this).find('canvas').hasClass('animating')) {
          $(this).find('canvas').transition({ rotate: '1turn' }, 800).addClass('animating');
          $(this).find('span:first-of-type').transition({ opacity: 0 }, 800);
          $(this).find('span.desc').transition({ opacity: 1 }, 800);
        }
      },
      function out() {
        $(this).find('canvas').transition({ rotate: '0turn' }, 500, function() {
          $(this).removeClass('animating');
        });
        $(this).find('span:first-of-type').transition({ opacity: 1 }, 500);
        $(this).find('span.desc').transition({ opacity: 0 }, 500);
      }
    );
  }
  
  function setupKnobs() {
    $('.dial').knob({
//    .each(function(e){
//      var color = $(this).parent().hasClass('important') ? '#ff452d' : '#333';
      
//      $(this).knob({
        readOnly: true,
        width: 120,
        displayInput: false,
        fgColor: '#333',
        thickness: '0.15',
        draw : function () {
            var a = this.angle(this.cv)  // Angle
                , sa = this.startAngle          // Previous start angle
                , sat = this.startAngle         // Start angle
                , ea                            // Previous end angle
                , eat = sat + a                 // End angle
                , r = true;

            this.g.lineWidth = this.lineWidth;

            this.o.cursor
                && (sat = eat - 0.3)
                && (eat = eat + 0.3);

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.value);
                this.o.cursor
                    && (sa = ea - 0.3)
                    && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.previousColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ; // ff452d
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
        }
//      });
    });
  }
  
  function setupFancyIcons(){
    $('.fancy-icon.square-to-circle').hover(function(e){
      $(this).transition({ borderRadius: '30px', rotate: '-0.5turn' }, 400, 'ease');
    }, function(e){
      $(this).transition({ borderRadius: '4px', rotate: '0turn' }, 400, 'ease');
    });
    $('.fancy-icon.spin').hover(function(e){
      $(this).transition({ rotate: '0.25turn' }, 300, 'ease');
    }, function(e){
      $(this).transition({ rotate: '0turn' }, 300, 'ease');
    });
    $('.fancy-icon.flip').hover(function(e){
      $(this).transition({ rotateX: '-0.5turn' }, 400, 'ease');
    }, function(e){
      $(this).transition({ rotateX: '0turn' }, 400, 'ease');
    });
  };

  function setupExtra() {
    $('h1#caleb-contact-segue').click(function() {
      $(this).find('span.extra').css('display', 'inline');
      $(this).find('span.first').text('Thank you');
    });
  }
  
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
    $('a').smoothScroll({offset: -50});
  };
})();
