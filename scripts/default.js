(function(){
	window.onload = function(){
		$('.tile').each(function(){$(this).hoverdir();});
		$('.tile img').imageloader();
		$('.title-box').transition({ y:'220px' });

		new HeaderViewModel().onload();

		animateChevron();
		setupSmoothScroll();
	};
	window.onresize = function(){
		setBannerHeight();
	};

	function animateChevron(){
		var chevron = $('#header-image .arrow');
		animateIt();
		function animateIt(){
			chevron
				.transition({y:-10}, 1000, 'ease')
				.transition({y:0}, 1000, animateIt);
		};
	};

	function preloadImages(){
		$('.background-img:not(.default)').imageloader({
			background: true,
		});
	};

	function setBannerHeight(){
		$('#header-image').height(window.innerHeight);
		// $('#header-image .background-img').css('background-image', 'url(assets/mountains-blur-12.png)');

		$('.blur-layer').show();
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

	function HeaderViewModel(){
		var that = this;

		this.onload = function(){
			$('.background-img:first').imageloader({
				background: true,
				callback: function(e){
					$(e).fadeIn(1000);
					preloadImages();
				}
			}).hide();
		};

		function startSlideshow(){
			var imgDivs = $('.background-img');
			var pointer = 0;
			setInterval(function(){
				imgDivs.eq(pointer).fadeOut(2000);
				imgDivs.eq((pointer + 1) % imgDivs.length).fadeIn(2000);
				pointer = (pointer + 1) % imgDivs.length;
			}, 10000);
		}

		function preloadImages(){
			var numLoaded = 0;
			var imgDivs = $('.background-img:not(:first)');
			imgDivs.imageloader({
				background: true,
				callback: function(e){
					if (++numLoaded === imgDivs.length){
						startSlideshow();
					}
				}
			})
		}
	}
})();