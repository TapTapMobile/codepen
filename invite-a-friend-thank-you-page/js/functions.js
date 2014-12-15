/*---------------------------
LeadPages Custom Functions
----------------------------*/
var leadpages_input_data = {
    'twittertext': "You're Invited! Join our webinar at", //Default share text for Twitter message.
    'shareurl': "http://leadpages.net", //URL for Share Buttons. We recommend putting your webinar registration page URL here.
};

$(function() {
    $('.popup').click(function(event) {
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;
        
        window.open(url, 'twitter', opts);
     
        return false;
      });
      $('.twitter').attr('href',"http://twitter.com/share?text=" + leadpages_input_data['twittertext'] + " " + leadpages_input_data['shareurl']);
      $('.facebook').attr('href',"https://www.facebook.com/sharer/sharer.php?u=" + leadpages_input_data['shareurl']);
});

// Must load 3rd party API after data-attributes have been updated.

    /* Twitter */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    /* Google plus */
    !(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
    /* Facebook */
    !(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
