var rafTimer;
window.onscroll = function (event) {
	cancelAnimationFrame(rafTimer);
	rafTimer = requestAnimationFrame(toggleHeaderFloating);
};

function toggleHeaderFloating() {
	if (window.scrollY > 280) {
		document.body.classList.add('sticky');
	} else {
		document.body.classList.remove('sticky');
	}
}