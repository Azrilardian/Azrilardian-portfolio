//! Scroll Effect
window.addEventListener("scroll", function() {
    function scrollEffect(el) {
        let element = document.querySelectorAll(el);
        for (let i = 0; i < element.length; i++) {
            let elementPosition = element[i].getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.4;
            if (elementPosition < screenPosition) {
                element[i].classList.add("muncul");
            }
        }
    }

    function scrollEffectEach(el) {
        let element = document.querySelectorAll(el);
        let jumlah = element.length;
        let mulai = 0;
        let elementPosition = element[mulai].getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.4;
        if (elementPosition < screenPosition) {
            const interval = setInterval(function() {
                element[mulai].classList.add("muncul");
                mulai++;
                if (mulai == jumlah) {
                    clearInterval(interval);
                }
            }, 350);
        }
    }
    scrollEffectEach(".portofolio-parallax");
    scrollEffect(".scrollEffect");
    scrollEffect(".team-parallax");
    scrollEffect(".progress-parallax");
    scrollEffectEach(".service-parallax");
});