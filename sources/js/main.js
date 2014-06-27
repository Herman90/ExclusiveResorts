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

/*	b.prototype.show = function() {
		if(!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if(this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .panel > .in");
				if(c && c.length) {
					var d = c.data("bs.collapse");
					if(d && d.transitioning)
						return;
					c.collapse("hide"), d || c.data("bs.collapse", null)
				}
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function() {
					this.$element.removeClass("collapsing").addClass("in")[e]("auto"),
						this.transitioning = 0,
						this.$element.trigger("shown.bs.collapse")
				};
				if(!a.support.transition)
					return f.call(this);
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
			}
		}
	}
	b.prototype.hide = function() {
		if(!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if(this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
			}
		}
	}*/
});