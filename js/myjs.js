(function($) {
	function highlight(lang) {
        var nodeList = document.getElementsByClassName('sh_'+lang);
        for (var i = 0; i < nodeList.length; i++) {
            var element = nodeList.item(i);
            sh_highlightElement(element, sh_languages[lang]);
            if(sh_languages[lang].identify) sh_languages[lang].identify();
        }
	}
    
    $( document ).ready(function() {
    	highlight('pascal');
        highlight('syntax');
        highlight('hc-mix');
        
    });

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop || st == 0){
            // downscroll code
            $('.navbar').removeClass('fixed-top bg-nav').addClass('bg-inverse');
            $('body').css("padding-top","0px");
        } else {
            // upscroll code
            $('.navbar').addClass('fixed-top bg-nav').removeClass('bg-inverse');
            $('body').css("padding-top","60px");
        }
        lastScrollTop = st;
    });
})(jQuery); // End of use strict
