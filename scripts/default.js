
(function(){

	window.onload = function(){
		$('#tiles-showcase .tile').each(function(){$(this).hoverdir();});
		$('#header-image .background-img').imageloader({
			background: true,
			callback: function(e){
				$(e).fadeIn(1000);
			}
		}).hide();
		$('.tile img').imageloader();
		$('.title-box').transition({ y:'220px' });
		// var element = $("#header-image .arrow");
	 //    (function(){
	 //        element
	 //        	.transition({scale:2})
	 //        	.transition({
	 //        		scale: 1,
	 //        		callback: arguments.callee
	 //        	});
	 //    }());

		setupSmoothScroll();
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