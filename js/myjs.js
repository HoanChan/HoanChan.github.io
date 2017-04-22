(function($) {
	function highlight(lang) {
        var nodeList = document.getElementsByClassName('sh_'+lang);
        for (var i = 0; i < nodeList.length; i++) {
            var element = nodeList.item(i);
            sh_highlightElement(element, sh_languages[lang]);
        }
	}

    function replace(element, regex, result)
    {
        var hcmix = $(element);
        hcmix.html(hcmix.html().replace(regex, result));
    }
    $( document ).ready(function() {
    	highlight('pascal');
        highlight('hc-mix');
        $('.sh_hc-mix').each(function(index, el) {
            replace(el, /\*_([a-d])_\*/gi, "<span class='sh_keyword sh_italic sh_underline'>$1</span>");
            replace(el, /_([a-d])_/gi, "<span class='sh_keyword sh_underline'>$1</span>");
            replace(el, /\*([a-d])\*/gi, "<span class='sh_keyword sh_italic'>$1</span>");
            replace(el, /_(Nhóm\s+[0-9]+\s*(?:[\.:\)]|\s))_/gi, "<span class='sh_predef_func sh_underline'>$1</span>");
        });;
    });
})(jQuery); // End of use strict
