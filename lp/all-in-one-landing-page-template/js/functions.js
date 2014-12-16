$(function () {

    /* Twitter */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    /* Google plus */
    !(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();
    /* Facebook */
    !(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));

});

/* Share bar load*/
jQuery(document).ready(function ($) {
    $('.sharebar').sharebar({
        horizontal: 'false',
        swidth: '71',
        minwidth: 1000,
        position: 'left',
        leftOffset: 20,
        rightOffset: 10
    });
});

/*
 *  ShareBar - Creates a dynamic, vertical sharing bar to the left of a WordPress post and hides it if browser window is too small
 *  Copyright 2010 Monjurul Dolon, http://mdolon.com/
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://devgrow.com/sharebar
 */
jQuery.fn.sharebar = function (options) {
    var defaults = {
        horizontal: true,
        swidth: 65,
        minwidth: 1000,
        position: 'left',
        leftOffset: 20,
        rightOffset: 10
    };
    var opts = jQuery.extend(defaults, options);
    var o = jQuery.meta ? jQuery.extend({}, opts, jQueryjQuery.data()) : opts;

    var w = jQuery(window).width();
    var sharebar = jQuery('#sharebar');
    var sharebarx = jQuery('#sharebarx');
    var parent = jQuery(sharebar).parent().width();
    var start = sharebar_init();

    function sharebar_init() {
        jQuery(sharebar).css('width', o.swidth + 'px');
        if (o.position == 'left') jQuery(sharebar).css('marginLeft', (0 - o.swidth - o.leftOffset));
        else {
            jQuery(sharebar).css('marginLeft', (parent + o.rightOffset));
        }
        if (w < o.minwidth && o.horizontal) jQuery(sharebarx).slideDown();
        else jQuery(sharebar).fadeIn();
        jQuery.event.add(window, "scroll", sharebar_scroll);
        jQuery.event.add(window, "resize", sharebar_resize);
        return
    }

    function sharebar_resize() {
        var w = jQuery(window).width();
        if (w < o.minwidth) {
            jQuery(sharebar).fadeOut();
            if (o.horizontal) jQuery(sharebarx).slideDown();
        } else {
            jQuery(sharebar).fadeIn();
            if (o.horizontal) jQuery(sharebarx).slideUp();
        }
    }

    function sharebar_scroll() {
        var p = jQuery(window).scrollTop();
        var w = jQuery(window).width();
        //jQuery(sharebar).css('position',((p+10)>start) ? 'fixed' : '');
        //jQuery(sharebar).css('top',((p+10)>start) ? '10px' : '');
    }

};


(function ($) {

    /*---------------------------
 Defaults for Reveal
----------------------------*/

    /*---------------------------
 Listener for data-reveal-id attributes
----------------------------*/

    $('a[data-reveal-id]').live('click', function (e) {
        $('.reveal-modal').show();
		e.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        $('#' + modalLocation).reveal($(this).data());
    });

    /*---------------------------
 Extend and Execute
----------------------------*/

    $.fn.reveal = function (options) {


        var defaults = {
            animation: 'fadeAndPop', //fade, fadeAndPop, none
            animationspeed: 300, //how fast animtions are
            closeonbackgroundclick: true, //if you click background will modal close?
            dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
        };

        //Extend dem' options
        var options = $.extend({}, defaults, options);

        return this.each(function () {

            /*---------------------------
 Global Variables
----------------------------*/
            var modal = $(this),
                topMeasure = parseInt(modal.css('top')),
                topOffset = modal.height() + topMeasure,
                locked = false,
                modalBG = $('.reveal-modal-bg');

            /*---------------------------
 Create Modal BG
----------------------------*/
            if (modalBG.length == 0) {
                modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
            }

            /*---------------------------
 Open & Close Animations
----------------------------*/
            //Entrance Animations
            modal.bind('reveal:open', function () {
                modalBG.unbind('click.modalEvent');
                $('.' + options.dismissmodalclass).unbind('click.modalEvent');
                if (!locked) {
                    lockModal();
                    if (options.animation == "fadeAndPop") {
                        modal.css({
                            'top': $(document).scrollTop() - topOffset,
                            'opacity': 0,
                            'visibility': 'visible'
                        });
                        modalBG.fadeIn(options.animationspeed / 2);
                        modal.delay(options.animationspeed / 2).animate({
                            "top": $(document).scrollTop() + topMeasure + 'px',
                            "opacity": 1
                        }, options.animationspeed, unlockModal());
                    }
                    if (options.animation == "fade") {
                        modal.css({
                            'opacity': 0,
                            'visibility': 'visible',
                            'top': $(document).scrollTop() + topMeasure
                        });
                        modalBG.fadeIn(options.animationspeed / 2);
                        modal.delay(options.animationspeed / 2).animate({
                            "opacity": 1
                        }, options.animationspeed, unlockModal());
                    }
                    if (options.animation == "none") {
                        modal.css({
                            'visibility': 'visible',
                            'top': $(document).scrollTop() + topMeasure
                        });
                        modalBG.css({
                            "display": "block"
                        });
                        unlockModal()
                    }
                }
                modal.unbind('reveal:open');
            });

            //Closing Animation
            modal.bind('reveal:close', function () {
                if (!locked) {
                    lockModal();
                    if (options.animation == "fadeAndPop") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "top": $(document).scrollTop() - topOffset + 'px',
                            "opacity": 0
                        }, options.animationspeed / 2, function () {
                            modal.css({
                                'top': topMeasure,
                                'opacity': 1,
                                'visibility': 'hidden'
                            });
                            unlockModal();
                        });
                    }
                    if (options.animation == "fade") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "opacity": 0
                        }, options.animationspeed, function () {
                            modal.css({
                                'opacity': 1,
                                'visibility': 'hidden',
                                'top': topMeasure
                            });
                            unlockModal();
                        });
                    }
                    if (options.animation == "none") {
                        modal.css({
                            'visibility': 'hidden',
                            'top': topMeasure
                        });
                        modalBG.css({
                            'display': 'none'
                        });
                    }
                }
                modal.unbind('reveal:close');
				        $('.reveal-modal').hide();
            });

            /*---------------------------
 Open and add Closing Listeners
----------------------------*/
            //Open Modal Immediately
            modal.trigger('reveal:open')

            //Close Modal Listeners
            var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
                modal.trigger('reveal:close')
            });

            if (options.closeonbackgroundclick) {
                modalBG.css({
                    "cursor": "pointer"
                })
                modalBG.bind('click.modalEvent', function () {
                    modal.trigger('reveal:close')
                });
            }
            $('body').keyup(function (e) {
                if (e.which === 27) {
                    modal.trigger('reveal:close');
                } // 27 is the keycode for the Escape key
            });


            /*---------------------------
 Animations Locks
----------------------------*/

            function unlockModal() {
                locked = false;
            }

            function lockModal() {
                locked = true;
            }

        }); //each call
    } //orbit plugin call
})(jQuery);