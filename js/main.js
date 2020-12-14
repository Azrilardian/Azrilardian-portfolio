if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("./service-worker.js")
		.then(() => console.log("Succes Registration Service Worker"))
		.catch((err) => console.log("Registration Failed", err));
}

$(".page-scroll").on("click", function (e) {
	// ambil isi href
	var tujuan = $(this).attr("href");
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$("html,body").animate(
		{
			scrollTop: elemenTujuan.offset().top - 100,
		},
		1250,
		"easeInOutExpo"
	);

	e.preventDefault();

	$(".jumbotron h1").css({
		transform: "translate(0px, " + wScroll / 4 + "%)",
	});
});

function navigation() {
	const navContainer = document.querySelector("header nav");
	const burgerDiv = document.querySelectorAll(".burger div");
	const ul = document.querySelector("header nav ul");
	const li = document.querySelectorAll("header nav ul li");

	let burger = document.querySelector(".burger");
	burger.addEventListener("click", function () {
		ul.classList.toggle("nav-active");
		this.classList.toggle("toggle");
		li.forEach((links, index) => (links.style.animation ? (links.style.animation = "") : (links.style.animation = "liFadeIn 0.2s ease forwards " + (index / 7 + 0.3) + "s")));
		burgerDiv.forEach((e) => e.classList.toggle("active"));
	});

	window.addEventListener("scroll", () => (pageYOffset >= 100 ? navContainer.classList.add("black") : navContainer.classList.remove("black")));
}
navigation();

function buttonToTop() {
	const button = document.getElementById("button-to-top");
	window.addEventListener("scroll", () => (pageYOffset > 800 ? button.classList.add("show") : button.classList.remove("show")));
}
buttonToTop();

function loading() {
	const containerImgLoading = document.querySelector(".img-loading");
	const body = document.querySelector("body");
	const section = document.querySelectorAll("section");
	const footer = document.querySelector("footer");
	const header = document.querySelector("header");
	const allSection = [body, footer, header];

	section.forEach((e) => allSection.push(e));
	allSection.map((e) => e.classList.add("loading"));

	window.addEventListener("load", () => {
		containerImgLoading.classList.add("loaded");
		setTimeout(() => {
			containerImgLoading.remove();
			allSection.map((e) => e.classList.remove("loading"));
		}, 1100);
	});
}
loading();

// const certficateFocus = () => {
// 	const certificates = document.querySelectorAll(".certificate-parallax .img-container");
// 	certificates.forEach((certificate) => {
// 		certificate.addEventListener("click", function (e) {
// 			certificates.forEach((el) => el.classList.remove("click"));
// 			this.classList.add("click");
// 		});
// 	});
// };
// certficateFocus();
