
(function(){

	window.onload = function(){
		$('#tiles-showcase .tile').each(function(){$(this).hoverdir();});
		// setBannerHeight();
		setupSmoothScroll();
		$('#header-image .background-img').imageloader({
			background: true,
			callback: function(e){
				$(e).fadeIn(1000);
			}
		}).hide();    
	};
	window.onresize = function(){
		setBannerHeight();
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
})();