$(document).ready(function() {
	$('.jcarousel').on('jcarousel:create jcarousel:reload', function() {
		var element = $(this),
			width = element.innerWidth();

		// This shows 1 item at a time.
		// Divide `width` to the number of items you want to display,
		// eg. `width = width / 3` to display 3 items at a time.
		element.jcarousel('items').css('width', width + 'px');
	})
	.jcarousel({
		wrap:'circular'
	})
	.jcarouselAutoscroll({
		interval: 4000,
		target: '+=1',
		autostart: true
	});

	$('.jcarousel-prev').jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel-next').jcarouselControl({
		target: '+=1'
	});
	$('.fancybox').fancybox();		
});