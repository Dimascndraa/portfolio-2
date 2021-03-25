$('.page-scroll').on('click', function(event){
	if(this.has !==''){
		event.preventDefault();

		const hash= this.hash;
		$('html,body').animate({
			scrollTop: $(hash).offset().top-75
			},1250, 'easeInOutExpo');
	}
});	

// Parallax
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});	

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});




	//pottfolio
	if( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .img-thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});	
	}
});



