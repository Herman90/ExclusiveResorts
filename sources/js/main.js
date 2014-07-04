$(function() {
	$(".nav li a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 300, function() {
			window.location.hash = hash;
		});

	});

	$(window).scroll(function() {
		animateIfVisible();
	});

	function animateIfVisible() {
		var topOfWindow = $(window).scrollTop();
		var windowHeight = $(window).height();
		$('.animate').each(function() {
			var imagePos = $(this).offset().top;
			if(imagePos < topOfWindow + windowHeight + 10) {
				$(this).addClass('slideUp');
			} else {
				$(this).removeClass('slideUp');
			}
		});

		$('.animateFadeIn').each(function() {
			var imagePos = $(this).offset().top;
			var imageHeight = $(this).height();
			if(imagePos < topOfWindow + windowHeight - imageHeight - 10 && imagePos >= topOfWindow) {
				$(this).addClass('fadeIn');
			} else if(imagePos + imageHeight < topOfWindow || imagePos > topOfWindow + windowHeight) {
				$(this).removeClass('fadeIn');
			}
		})
	}

	animateIfVisible();
});
$(function() {
	var $nav = $('.navbar-collapse'),
		$navToggle = $('.navbar-toggle'),
		tabletWidth = 768;
	$nav.on('show.bs.collapse hide.bs.collapse', function(e) {
		var winWidth = $(window).width();
		if(winWidth < tabletWidth) {
			$nav.removeClass('width');
		} else {
			$nav.addClass('width');
		}
		$nav.attr('style', '');
	});

	$(document).on('click', function(e) {
		var $target = $(e.target),
			winWidth = $(window).width();
		if($target.parents('.navbar.navbar-default').length === 0 && !(winWidth < tabletWidth)) {
			$nav.collapse('hide');
			$navToggle.addClass('collapsed');
		}
	})
});

$(function() {
	var $htmlAndBody = $('html,body'),
		$body = $('body'),
		$videoContainer = $('#videoBlock'),
		$videoIFrame = $videoContainer.find('iframe');

	$('.er-video, .er-video-img').on('click', function(e) {
		var $this = $(this),
			videoSourceId = $this.attr('data-video'),
			videoSource = '//www.youtube.com/embed/' + videoSourceId + '?autoplay=1';
		$videoIFrame.attr('src', videoSource);
		$videoContainer.removeClass('hidden');
		$htmlAndBody.addClass('no-scroll');

		$body.on('touchmove', function(e) {
			e.preventDefault()
		})
	});

	$videoContainer.on('click', function(e) {

		$videoIFrame.attr('src', '');
		$videoContainer.addClass('hidden');
		$htmlAndBody.removeClass('no-scroll');

		$body.off('touchmove');
		return false;
	});

	$videoIFrame.on('click touchstart touchmove', function(e) {
		e.preventDefault();
	});
});