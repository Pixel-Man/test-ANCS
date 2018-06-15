var commentsSwiper = new Swiper('.main-comments__wrap-list', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 500,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	}
});

var userLogo = document.querySelectorAll('.main-comments__user-img'),
	arrSlider = document.querySelectorAll('.swiper-pagination-bullet');

setInterval(function () {
	var indexSlide = commentsSwiper.realIndex;
	for (var j = 0; j < userLogo.length; j++) {
		userLogo[j].classList.remove('active');
	}
	userLogo[indexSlide].classList.add('active');
}, 0);



for (var i = 0; i < userLogo.length; i++) {
	userLogo[i].addEventListener('click', function () {
		var indexSlide = this.getAttribute('data-comment') - 1;
		for (var j = 0; j < userLogo.length; j++) {
			userLogo[j].classList.remove('active');
		}
		this.classList.add('active');
		commentsSwiper.slideToLoop(indexSlide);
	})
}
