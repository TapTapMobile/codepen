$(document).ready(function() { 
    
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        $('#error_display').empty();
        $('.form-field span').empty();
        $('.form-field').css("margin-bottom","20px");
        if(validateData()){
            $.post("subscribe.php", {
                name: $("#contact-name").val(),
                email:$("#contact-email").val(),
                phone: $("#contact-phone").val()
            }).done(function( data ) {
                if(data == 1){
                    var google_conversion_id = 999761620;
                    var google_conversion_language = "en";
                    var google_conversion_format = "3";
                    var google_conversion_color = "ffffff";
                    var google_conversion_label = "L50SCIfwxVgQ1M3c3AM";
                    var google_remarketing_only = false;
                    $.getScript( "http://www.googleadservices.com/pagead/conversion.js" );
                    $("#error_display").append("Registered Successfully!");
                }else{
                    $("#error_display").append(data);
                }
            });
        }
    }); 

    jQuery('.tfooter .btn').click(function(e){
        jQuery('html, body').animate({scrollTop:0}, 750, 'linear');
        e.preventDefault();
        return false;
    });  
    
});

function validateData(){
    
    var fc=0;
    var fe=0;
    var fp=0;
    
    if($("#contact-name").val()==""){
        $("#name-error").append("Please enter your Full Name");
        $("#name-error").parent().css("margin-bottom","10px");
        fc=1;
    }

    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(!emailReg.test($("#contact-email").val())) {
        $("#email-error").append("Please enter a valid Email Address");
        $("#email-error").parent().css("margin-bottom","10px");
        fe=1;
    }

    var phonefilter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (!(phonefilter.test($("#contact-phone").val()) && $.isNumeric($("#contact-phone").val()))) {
        $("#phone-error").append("Please enter a valid phone number");
        $("#phone-error").parent().css("margin-bottom","10px");
        fp=1;
    }

    if(!(fc && fe && fp)){
        return true;
    }else{
        return false;
    }

}