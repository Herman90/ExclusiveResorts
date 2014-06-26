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

    function animateIfVisible(){
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

        $('.animateFadeIn').each(function() {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            if(imagePos < topOfWindow + windowHeight - imageHeight - 10 && imagePos >= topOfWindow) {
                $(this).addClass("fadeIn");
            } else if(imagePos + imageHeight < topOfWindow || imagePos > topOfWindow + windowHeight){
                $(this).removeClass("fadeIn");
            }
        })
    }

    animateIfVisible();
});