// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {

	$('.share__btn').click(function(event){
		event.preventDefault();
		var service = $(this).data('service');
		switch(service) {
			case 'facebook':
				url = ( LeadPageData['facebookShareURL']['value'] ? LeadPageData['facebookShareURL']['value'] : document.URL);
				window_size = "width=585,height=368";
				go = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
				break;
			case 'twitter':
				url = ( LeadPageData['twitterShareURL']['value'] ? LeadPageData['twitterShareURL']['value'] : document.URL);
				window_size = "width=585,height=261";
				go = 'http://www.twitter.com/intent/tweet?url=' + url;
				break;
			case 'google':
				url = ( LeadPageData['googleShareURL']['value'] ? LeadPageData['googleShareURL']['value'] : document.URL);
				window_size = "width=517,height=511";
				go = 'http://plus.google.com/share?url=' + url;
				break;
			case 'linkedin':
				url = ( LeadPageData['linkedInShareURL']['value'] ? LeadPageData['linkedInShareURL']['value'] : document.URL);
				window_size = "width=520,height=570";
				go = 'http://www.linkedin.com/shareArticle?mini=true&url=' + url;
				break;
			default:
				return false;
		}
		window.open(go, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
	});

	function waitForLeadPageData(){
		if ( typeof LeadPageData !== "undefined" ) {
			/* Set the social page links */
			$('.social-link--facebook').attr('href', (LeadPageData['facebookURL']['value'] || '#') );
			$('.social-link--twitter').attr('href', (LeadPageData['twitterURL']['value'] || '#') );
			$('.social-link--google-plus').attr('href', (LeadPageData['googleURL']['value'] || '#') );
			$('.social-link--linkedin').attr('href', (LeadPageData['linkedInURL']['value'] || '#') );
		}	else {
			setTimeout( function(){
				waitForLeadPageData();
			}, 1000 );
		}
	}
	waitForLeadPageData();

});