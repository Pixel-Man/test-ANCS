var headerNav = document.querySelector('.main-header__nav'),
	toggleMenu = document.querySelector('.main-header__nav-btn');

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled == 0) {
		headerNav.style.position = 'absolute';
		headerNav.classList.remove('fixed');
	} else {
		headerNav.style.position = 'fixed';
		headerNav.classList.add('fixed');
		headerNav.classList.remove('active');
		headerNav.classList.add('hidden');
		toggleMenu.classList.remove('is-active');
	}
};

toggleMenu.addEventListener('click', function (e) {
	e.preventDefault();
	if (this.classList.contains('is-active')) {
		this.classList.remove('is-active');
		headerNav.classList.remove('active');
		headerNav.classList.add('hidden');
	} else {
		this.classList.add('is-active');
		headerNav.classList.remove('hidden');
		headerNav.classList.add('active');
	}
});
