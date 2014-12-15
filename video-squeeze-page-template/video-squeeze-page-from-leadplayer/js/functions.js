$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});

	// Set parameters
	var minutes = parseInt($('.form-wrap').attr('data-minutes'));
	var seconds = parseInt($('.form-wrap').attr('data-seconds'));;

	show_box(minutes, seconds);
});

function show_box(minutes, seconds) {
	var _interval = (minutes * 60)*1000 + seconds*1000;
	setTimeout( function(){
		$('.form-wrap').fadeIn(800);
	}, _interval);
}