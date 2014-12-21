/*---------------------------
LeadPages Custom Functions
----------------------------*/
var leadpages_input_data = {
  'message': "Completed", //Percentage Bar Text
  //'twitterscreenname': "leadpages", //Your Twitter Screen Name for Twitter Button
  //'facebooklikeurl': "", //Facebook Like URL for Like Button (Leave blank to share current page)
  'googleurl': "", //Google Plus URL for Share Button (Leave blank to share current page)
  'facebookurl': "", //Facebook URL for Share Button (Leave blank to share current page)
  'twitterurl': "", //Twitter URL for Tweet Button (Leave blank to share current page)
  'facebookcomments': "http://www.leadpages.net", //Facebook Comments URL
  'facebookcommentsposts': "4" //# of Facebook Comments to Display
};

$(function() {
  var url = window.location.href;
  $('.pop-facebook').attr('href',"https://www.facebook.com/sharer/sharer.php?u=" + url);
  $('.pop-google').attr('href',"https://plus.google.com/share?url=" + url);
  //$('.pop-twitter').attr('href',"https://twitter.com/intent/user?screen_name=" + leadpages_input_data['twitterscreenname']);
  $('.pop-twitter').attr('href',"https://twitter.com/share?url=" + url);
  $('.fb-comments').attr('data-href',"" + leadpages_input_data['facebookcomments']);
  $('.fb-comments').attr('data-num-posts',"" + leadpages_input_data['facebookcommentsposts']);

function calculatePercent () {
      var startDigit = $('.header span.start').text(),
      endDigit = $('.header span.end').text(),
      firstPercent = 100/endDigit,
      currentPercent = firstPercent*startDigit,
      currentPercent = currentPercent.toFixed(1),
      firstPercentInPixels = currentPercent/100,
      inPixels = parseInt(750*firstPercentInPixels)
      $('.complete-line .progress-bar').width(currentPercent + '%')
      $('.complete-line span').text( currentPercent + '%' + ' ' + leadpages_input_data['message'])
  }
  calculatePercent();


  $(".header span.end, .header span.start").bind("DOMSubtreeModified", calculatePercent);


});



/*---------------------------
Display date
----------------------------*/

$(document).ready(function() {
    var mydate=new Date()
  var year=mydate.getYear()
  if (year < 1000)
  year+=1900
  var day=mydate.getDay()
  var month=mydate.getMonth()
  var daym=mydate.getDate()
  if (daym<10)
  daym="0"+daym
  var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
  var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
  $("#date").append(""+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+"");
 });

/*---------------------------
Social popup windows
----------------------------*/
$(document).ready(function() {
  $('.pop-twitter').click(function(event) {
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
  $('.pop-facebook').click(function(event) {
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
    
    window.open(url, 'facebook', opts);
 
    return false;
  });
  $('.pop-google').click(function(event) {
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
    
    window.open(url, 'google', opts);
 
    return false;
  });
});

// Must load 3rd party API after data-attributes have been updated.

    /* Twitter */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    /* Google plus */
    !(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
    /* Facebook */
    !(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));






