(function($) {

    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop || st == 0) {
            // downscroll code
            $('.navbar').removeClass('fixed-top bg-nav').addClass('bg-inverse');
            $('body').css("padding-top", "0px");
        } else {
            // upscroll code
            $('.navbar').addClass('fixed-top bg-nav').removeClass('bg-inverse');
            $('body').css("padding-top", $('.navbar').height()+ "px");
        }
        lastScrollTop = st;
    });

    function imgUpdate() {
        var main = $('#main-content');
        main.find('div .img').each(function(index, el) {
            var img = $(el);
            var other = img.parent().siblings();
            var div = img.parent().parent();
            if (img.width() > main.width() / 2) {
                img.removeClass('img-r');
                img.addClass('img-m');
                other.css('margin-right', "");
                div.height("auto");
                other.first().css("padding-top", "");
            } else {
                img.removeClass('img-m');
                img.addClass('img-r');
                other.css('margin-right', (img.outerWidth() + 10) + "px");
                var ph = 0;
                other.each(function(index, cel) {
                    ph = ph + $(cel).outerHeight();
                });
                var eh = img.outerHeight();
                div.height(10 + (ph > eh ? ph : eh));
                if (eh < ph)
                    img.css("top", (ph - eh) / 2 + "px");
                else
                    other.first().css("padding-top", (eh - ph) / 2 + "px");
            }
        });
    }

    $(document).ready(function() {
        imgUpdate();
        $("a[href='#']").click(function(e) {
            e.preventDefault();
        });
    });

    $(window).on('resize', function() {
        imgUpdate();
    });
})(jQuery); // End of use strict