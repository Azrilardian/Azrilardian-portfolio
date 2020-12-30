import main from "./js/main";
import "./css/style.css";

import typeWritterEffect from "./js/typeWritting";
import scrollEffect from "./js/scrollEffect";
import scrollEffectCertificate from "./js/scrollEffectCertificate";
import scrollEffectPortfolio from "./js/scrollEffectPortfolio";
import scrollEffectSkills from "./js/scrollEffectSkills";

document.addEventListener("DOMContentLoaded", () => {
	main();
	typeWritterEffect();
	scrollEffect();
	scrollEffectCertificate();
	scrollEffectPortfolio();
	scrollEffectSkills();
});
