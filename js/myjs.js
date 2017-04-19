(function($) {
	function highlight(lang) {
        var nodeList = document.getElementsByClassName('sh_'+lang);
        for (var i = 0; i < nodeList.length; i++) {
            var element = nodeList.item(i);
            sh_highlightElement(element, sh_languages[lang]);
        }
	}
    $( document ).ready(function() {
    	highlight('pascal');
    });
})(jQuery); // End of use strict
