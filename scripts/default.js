(function(){
	window.onload = function(){
		$('#tiles-showcase .tile').each(function(){$(this).hoverdir();});
		setBannerHeight();
		setupSmoothScroll();
	};
	window.onresize = function(){
		setBannerHeight();
	};
	function setBannerHeight(){
		$('#header-image').height(window.innerHeight);
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