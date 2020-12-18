window.addEventListener("scroll", function () {
	function scrollEffectEach(el) {
		let element = document.querySelectorAll(el);
		let jumlah = element.length;
		let mulai = 0;
		let elementPosition = element[mulai].getBoundingClientRect().top;
		let screenPosition = window.innerHeight / 0.9;
		if (elementPosition < screenPosition) {
			const interval = setInterval(function () {
				element[mulai].classList.add("muncul");
				mulai++;
				if (mulai == jumlah) clearInterval(interval);
			}, 250);
		}
	}
	if (document.querySelector(".portfolio-parallax")) scrollEffectEach(".portfolio-parallax");
	else {
		return;
	}
});
