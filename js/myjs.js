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
            $('.navbar').removeClass('navbar-transparent navbar-fixed-top');
            $('body').css('padding-top', '0px');
        } else {
            // upscroll code
            $('.navbar').addClass('navbar-transparent navbar-fixed-top');
            $('body').css('padding-top', '50px');
        }
        lastScrollTop = st;
    });
    // $(window).scroll(function () {
    //     var top = $(document).scrollTop();
    //     $('.splash').css({'background-position': '0px -'+(top/3).toFixed(2)+'px'});
    //     if(top > 50)
    //         $('body > .navbar').removeClass('navbar-transparent');
    //     else
    //         $('body > .navbar').addClass('navbar-transparent');
    // });
})(jQuery); // End of use strict
