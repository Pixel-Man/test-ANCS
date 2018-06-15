var learnMoreBtn = document.querySelector('.main-feature__wrap-btn-more'),
	blockMainMap = document.querySelector('.main-map');

learnMoreBtn.addEventListener('click', function (e) {
	e.preventDefault();
	blockMainMap.classList.toggle('active');
});