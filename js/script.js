

$(function(){
	$('.carousel_brands').owlCarousel({
		items: 5,
		margin: 30,
		nav:true,
		loop: true
	});

	$('.carousel_partners').owlCarousel({
		items: 2,
		margin: 30,
		nav:true,
		loop: true
	});

	$('.gallery-item').fancybox();

	$(document)
		.on('click', '.nav-link, .logo', function(e){
			e.preventDefault();
			var $h = $(this.hash);
			$('html,body').animate({scrollTop:$h.offset().top}, 400);
		})
		.on('click', '.js-show-more-objects', function(){
			var that = $(this);
			var $el = $('.objects-list').filter('.hidden').filter(':first');

			$el.slideDown(300, function(){
				$(this).removeClass('hidden');

				if ( !$('.objects-list').filter('.hidden').size() ){ that.fadeOut(); }
			});
		})
		.on('mouseover', '.services-item', function(){
			var that = $(this);

			if ( that.find('video').size() ){
				that.find('video')[0].play();
			}
		})
		.on('mouseleave', '.services-item', function(){
			var that = $(this);

			if ( that.find('video').size() ){
				that.find('video')[0].pause();
			}
		})
		.on('click', '.btn-anim', function(){
			var $this = $(this);
			var bg = $this.find('.btn-bg');
			var brH = bg.height();
			var brW = bg.width();

		})
		.on('click', '[data-object]', function(){
			var $this = $(this);
			var obj = $this.data('object');
			$('body').addClass('overhid');
			$('[data-gallery=' + obj + ']').fadeIn();
		})
		.on('click', '.object-item__close, .js-close-gallery', function(){
			var $this = $(this);
			var gal = $this.closest('.object-item');
			gal.fadeOut(function(){$('body').removeClass('overhid');});
		});


	scrollEvents($(window).scrollTop());

	$(window).scroll(function(){
		var st = $(window).scrollTop();
		scrollEvents(st);
	});
});

function scrollEvents(st){
	var header = $('.header');
	var welcome = $('.welcome');
	var $player = $('#video')[0];

	//header.css('top', st);

	if ( st > 1 ){
		header.addClass('fixed');
	} else {
		header.removeClass('fixed');
	}

	if ( st > 400 ){
		welcome.addClass('fixed');
		$player.pause();
	} else {

		welcome.removeClass('fixed');
		$player.play();
	}

	if ( st < 600 ){
		welcome.css({
			'position':'fixed',
			'top': '0'
		})
	} else {
		welcome.css({
			'position':'absolute',
			'top': 600
		})
	};
}
