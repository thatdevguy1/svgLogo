(function($) {
	
	var logo = $('#logo');
	
	var tl = new TimelineMax({repeat: -1, yoyo: true});
	tl.set(logo, {visible: true})
	.to(logo, 1.2, {x: 54, y: -34, opacity: .8, ease: Power1.easeInOut})
	.set(logo, {visible: false}).pause();
	
	
	$('svg').hover(function(){
		tl.play(0);
	}, function(){
		tl.pause(0);
	});
	
})(jQuery);