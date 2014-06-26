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
		var topOfWindow = $(window).scrollTop();
		var windowHeight = $(window).height();
		$('.animate').each(function() {
			var imagePos = $(this).offset().top;
			if(imagePos < topOfWindow + windowHeight + 10) {
				$(this).addClass("slideUp");
			} else {
				$(this).removeClass("slideUp");
			}
		});

		$('.add-info').each(function() {
			var imagePos = $(this).offset().top;
			if(imagePos < topOfWindow + windowHeight - 50) {
				$(this).addClass("fadeIn");
			} else {
				$(this).removeClass("fadeIn");
			}
		})
	});
});