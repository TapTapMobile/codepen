// background logic
(function($){
	$.setBackground = function(options) {
		options = options ? options : {};
		options = $.extend({}, { width:1440, height:1100, element:'#background' }, options);
		$(document).ready(function() { $.resizeBackground(options) });
		$(window).bind('resize', function() { $.resizeBackground(options) });
	};
	$.resizeBackground = function(options) {
		var $element = $(options.element);
		var ratio = options.height / options.width;
		var browserwidth = $(window).width();
		var browserheight = $(window).height();
		if (( browserheight/browserwidth) > ratio) {
			$element.height(browserheight);
			$element.width(browserheight / ratio);
		} else {
			$element.width(browserwidth);
			$element.height(browserwidth * ratio);
		}
	};
})(jQuery);

// invoke background
$(function() {
	$.setBackground({
		element: '#bgimg',
		width: 1440,
		height: 1100
	});
});