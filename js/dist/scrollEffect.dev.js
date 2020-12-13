"use strict";

//! Scroll Effect
window.addEventListener("scroll", function () {
  function scrollEffect(el) {
    var element = document.querySelectorAll(el);

    for (var i = 0; i < element.length; i++) {
      var elementPosition = element[i].getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.4;
      if (elementPosition < screenPosition) element[i].classList.add("muncul");
    }
  }

  function scrollEffectEach(el) {
    var element = document.querySelectorAll(el);
    var jumlah = element.length;
    var mulai = 0;
    var elementPosition = element[mulai].getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.4;

    if (elementPosition < screenPosition) {
      var interval = setInterval(function () {
        element[mulai].classList.add("muncul");
        mulai++;
        if (mulai == jumlah) clearInterval(interval);
      }, 350);
    }
  }

  scrollEffectEach(".portofolio-parallax");
  scrollEffect(".feature-parallax");
  scrollEffect(".team-parallax");
  scrollEffect(".progress-parallax");
  scrollEffectEach(".service");
  scrollEffectEach(".certificate-parallax");
});