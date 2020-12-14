window.addEventListener("scroll", function () {
	function scrollEffect(el) {
		let element = document.querySelector(el);
		let elementPosition = element.getBoundingClientRect().top;
		let screenPosition = window.innerHeight / 1.4;
		if (elementPosition < screenPosition) element.classList.add("muncul");
	}

	function scrollEffectEach(el) {
		let element = document.querySelectorAll(el);
		let jumlah = element.length;
		let mulai = 0;
		let elementPosition = element[mulai].getBoundingClientRect().top;
		let screenPosition = window.innerHeight / 1.4;
		if (elementPosition < screenPosition) {
			const interval = setInterval(function () {
				element[mulai].classList.add("muncul");
				mulai++;
				if (mulai == jumlah) clearInterval(interval);
			}, 250);
		}
	}
	if (document.querySelector(".feature-parallax") && document.querySelector(".team-parallax") && document.querySelector(".service")) {
		scrollEffectEach(".feature-parallax");
		scrollEffect(".team-parallax");
		scrollEffectEach(".service");
	} else {
		return;
	}
});
