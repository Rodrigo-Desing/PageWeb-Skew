window.addEventListener('load', function(){
	new Glider(document.querySelector('.modal-slider__list'), {
		slidesToShow: 1,
		dots: '.slider-indicadores',
		arrows: {
		    prev: '.modal-slider__anterior',
		    next: '.modal-slider__siguiente'
		},
		responsive: [
    	{
      // screens greater than >= 775px
	      breakpoint: 1000,
	      settings: {
	        // Set to `auto` and provide item width to adjust to viewport
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
    	}
  ]
	});

} )



window.addEventListener('load', function () {
	let btn = document.querySelector('.main-section__btn');
	btn.addEventListener('click', ()=>{
		let modal = document.querySelector('.modal');
		let modalSlider = document.querySelector('.modal-slider');
		modal.style.visibility = 'visible';
		modalSlider.classList.toggle('modal-slider--open')

		window.addEventListener('click', e =>{
			if (e.target == modal) {
				setTimeout(()=>{
					modal.style.visibility = 'hidden';
				},500);
				modalSlider.classList.remove('modal-slider--open');

			}
		})

	})
})
