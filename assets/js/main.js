var $r = jQuery.noConflict();
$r(document).ready(function() {
	$(".modal").fancybox({
		maxWidth	: 900,
		maxHeight	: 800,
		fitToView	: false,
		width		: '80%',
		height		: '80%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	$(".foto").fancybox({
		transitionIn	:	'none',
		transitionOut	:	'none',
		speedIn			:	300, 
		speedOut		:	200, 
		overlayShow		:	false
	});
});


var $j = jQuery.noConflict();
$j('#slider').bxSlider({
  captions: true,
  auto: true
});