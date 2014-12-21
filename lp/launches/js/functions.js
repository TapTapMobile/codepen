document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

/*---------------------------
Facebook HTML5 Data
----------------------------*/

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/*---------------------------
LeadPages Custom Functions
----------------------------*/
var leadpages_input_data = {
	'facebooklikeurl': "http://example.com", //Facebook Like Button URL
	'facebookcomments': "http://example.com" //Facebook Comments URL
};
	
$(function() {
	$('.fb-like').attr('data-href',"" + leadpages_input_data['facebooklikeurl']);
	$('.fb-comments').attr('data-href',"" + leadpages_input_data['facebookcomments']);
});


$(document).ready(function () {
  $('.item a[href=""]').addClass('disabled');
  $('.item a[href=""]').click(function(){return false;});
  $('.tabs-nav a[href=""]').addClass('disabled');
  $('.tabs-nav a[href=""]').click(function(){return false;});
});


/*---------------------------
youtube z-index fix
----------------------------*/
$(document).ready(function() {
    $("iframe").each(function(){
        var ifr_source = $(this).attr('src');
        var wmode = "wmode=transparent";
        if(ifr_source.indexOf('?') != -1) {
            var getQString = ifr_source.split('?');
            var oldString = getQString[1];
            var newString = getQString[0];
            $(this).attr('src',newString+'?'+wmode+'&'+oldString);
        }
        else $(this).attr('src',ifr_source+'?'+wmode);
    });
 });

/*---------------------------
Video Resizes
----------------------------*/
$(function() {

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com/embed'], iframe[src^='https://www.youtube.com/embed'], iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com']"),

	    // The element that is fluid width
	    $fluidEl = $(".box-video");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $(".tab-fragment:not(.sk-tab-hide) .box-video").width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});


