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

var $ = jQuery.noConflict();
$('ul.tabs').each(function(){
  var $active, $content, $links = $(this).find('a');
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');
  $content = $($active.attr('href'));

  $links.not($active).each(function () {
    $($(this).attr('href')).hide();
  });

  $(this).on('click', 'a', function(e){
    $active.removeClass('active');
    $content.hide();

    $active = $(this);
    $content = $($(this).attr('href'));

    $active.addClass('active');
    $content.show();

    e.preventDefault();
  });
});