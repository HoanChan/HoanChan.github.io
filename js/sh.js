---
---
{% include_relative sh_main.js %}
{% include_relative sh_pascal.js %}
{% include_relative sh_hc-mix.js %}
{% include_relative sh_syntax.js %}

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
})(jQuery); // End of use strict
