
/* ========================================================================= */
/*	Parallax Sections
/* ========================================================================= */

"use strict";

function parallaxInit() {
	$('#counter').parallax("50%", 0.3);
	$('#team-skills').parallax("50%", 0.3);
	$('#twitter-feed').parallax("50%", 0.3);
	$('#testimonial').parallax("50%", 0.3);
}

$(window).bind("load", function () {
    parallaxInit()
});
                     
        
/* ========================================================================= */
/* porfolio gallery
/* ========================================================================= */
                     
        
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  $(function() {
    $(".rslides").responsiveSlides();
  });
       
 
/* ========================================================================= */
/* skills chart
/* ========================================================================= */


$(function() {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#1abc9c',
    trackColor:	"#ecf0f1",
    size: 160,
    animate: 500
  });
});