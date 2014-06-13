(function(){
	window.onload = function(){
		$('#tiles-showcase .tile').each(function(){$(this).hoverdir();});
		// .hover(function(e){
		// 	// in
  //       	var edge = closestEdge(e.pageX, e.pageY, $(this).width(), $(this).height());
  //       	$(this).find('.overlay').transition()
		// }, function(e){
		// 	// out
  //       	var edge = closestEdge(e.pageX, e.pageY, $(this).width(), $(this).height());

		// });
	};
})();

// function closestEdge(x,y,w,h) {
// 	function distMetric(x,y,x2,y2) {
// 	    var xDiff = x - x2;
// 	    var yDiff = y - y2;
// 	    return (xDiff * xDiff) + (yDiff * yDiff);
// 	}

//     var topEdgeDist = distMetric(x,y,w/2,0);
//     var bottomEdgeDist = distMetric(x,y,w/2,h);
//     var leftEdgeDist = distMetric(x,y,0,h/2);
//     var rightEdgeDist = distMetric(x,y,w,h/2);
//     var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
//     switch (min) {
//         case leftEdgeDist:
//             return "left";
//         case rightEdgeDist:
//             return "right";
//         case topEdgeDist:
//             return "top";
//         case bottomEdgeDist:
//             return "bottom";
//     }
// }
    
