$(function(){
    $(".nav li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){
            window.location.hash = hash;
        });

    });

    $(window).scroll(function() {
        $('.animate').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (imagePos < topOfWindow + windowHeight + 10) {
                $(this).addClass("slideUp");
            }else{
                $(this).removeClass("slideUp");
            }
        });
    });
});