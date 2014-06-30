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
			} else if(imagePos + imageHeight < topOfWindow || imagePos > topOfWindow + windowHeight) {
				$(this).removeClass("fadeIn");
			}
		})
	}

	animateIfVisible();
});
$(function() {
	var $nav = $(".navbar-collapse"),
		tabletWidth = 768;
	$nav.on("show.bs.collapse hide.bs.collapse", function(e) {
		var winWidth = $(window).width();
		if(winWidth < tabletWidth) {
			$nav.removeClass("width");
		} else {
			$nav.addClass("width");
		}
		$nav.attr("style", "");
	});
});

$(function() {

	$(".er-video, .er-video-img").on("click", function(e) {
		var $this = $(this),
			$videoContainer = $("#videoBlock"),
			$videoIFrame = $videoContainer.find("iframe"),
			videoSource = $this.attr("data-video"),
			YTIframe = "//www.youtube.com/embed/" + videoSource;
		$videoIFrame.attr("src", YTIframe)
		$videoContainer.removeClass("hidden");
	});

	$(".close-x").on("click", function(e) {
		var $this = $(this),
			$videoContainer = $this.parent("#videoBlock"),
			$videoIFrame = $videoContainer.find("iframe");
		$videoIFrame.attr("src", "");
		$videoContainer.addClass("hidden");
	});
});