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

	$(document).on('click', '.submit-button', function(){
		if($('select').find('option:selected').index() == 0) {
			alert('Select Your Answer.')
			return false; 
		}

		if($('select').find('option:selected').index() != 1) {
			alert('Your guess is wrong! Please try again.')
			return false; 
		}

		else { 
			$('.step-1').hide();
			$('.step-2').fadeIn(800);
			return false;
		}
	});
});