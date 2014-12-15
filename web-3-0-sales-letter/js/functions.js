/*---------------------------
LeadPages Custom Functions
----------------------------*/



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

// Must load 3rd party API after data-attributes have been updated.

    /* Twitter */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    /* Google plus */
    !(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
    /* Facebook */
    !(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
