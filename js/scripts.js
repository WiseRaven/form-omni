$('.js-radio').change(function() {
	let $this = $(this);
	let textarea = $('.js-textarea');
	let exp = $this.val();

	let ratingText = {
		smile: 'Спасибо за вашу оценку. <strong>Мы рады, что вы довольны!</strong>',
		meh: 'Спасибо за вашу оценку. <strong>Что нам следует улучшить?</strong>',
		frown: 'Сожалеем, что огорчили вас.	<strong>Что мы сделали не так?</strong>'
	}
	
	switch (exp) {
		case 'smile':
			$this.parents('.rating').find('.js-rating-heading').html(ratingText.smile);
			break;
		case 'meh': 
			$this.parents('.rating').find('.js-rating-heading').html(ratingText.meh);
			break;
		case 'frown': 
			$this.parents('.rating').find('.js-rating-heading').html(ratingText.frown);
			break; 
	}

	$('.rating-body').addClass('visible');
	
	if(textarea.val().length) {
		textarea.addClass('with-text');
	}
})

$('.js-textarea').keyup(function() {
	let text = $(this).val();
	if (text.length > 0) {
		$(this).addClass('with-text');
		$('.js-send-btn').removeClass('disable');
	} else {
		$(this).removeClass('with-text');
		$('.js-send-btn').addClass('disable');
	}
})

$('.js-send-btn').click(function(e) {
	e.preventDefault();
	var $this = $(this);
	$this.addClass('loading');

	setTimeout(function(){
		$this.removeClass('loading');
		$this.addClass('sended');
		$this.parents('.rating').addClass('sended');
	}, 2000);
	
})
