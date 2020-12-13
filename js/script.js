// SMOTH SCROLL
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

//! Navigation
function navigation() {
	const navContainer = document.querySelector("header nav");
	const burgerDiv = document.querySelectorAll(".burger div");
	const ul = document.querySelector("header nav ul");
	const li = document.querySelectorAll("header nav ul li");

	document.addEventListener("click", function (e) {
		if (e.target.classList.contains("burger") || e.target.classList.contains("line-one") || e.target.classList.contains("line-two") || e.target.classList.contains("line-three")) {
			let burger;
			if (e.target.classList.contains("burger")) burger = e.target;
			if (e.target.classList.contains("line-one") || e.target.classList.contains("line-two") || e.target.classList.contains("line-three")) burger = e.target.parentElement;
			ul.classList.toggle("nav-active");
			li.forEach(function (links, index) {
				if (links.style.animation) links.style.animation = "";
				else {
					links.style.animation = "liFadeIn 0.2s ease forwards " + (index / 7 + 0.3) + "s";
				}
			});
			burger.classList.toggle("toggle");
			burgerDiv.forEach((e) => e.classList.toggle("active"));
		} else {
			const burger = document.querySelector(".burger");
			burger.classList.remove("toggle");
			ul.classList.remove("nav-active");
			li.forEach(function (links, index) {
				if (links.style.animation) links.style.animation = "";
				else {
					links.style.animation = "liFadeIn 0.2s ease forwards " + (index / 7 + 0.3) + "s";
				}
			});
			burgerDiv.forEach((e) => e.classList.remove("active"));
		}
	});

	window.addEventListener("scroll", function () {
		if (pageYOffset >= 100) return navContainer.classList.add("black");
		navContainer.classList.remove("black");
	});
}
navigation();

//! Button To Top
function buttonToTop() {
	const button = document.getElementById("button-to-top");
	window.addEventListener("scroll", function () {
		if (pageYOffset > 800) return button.classList.add("show");
		button.classList.remove("show");
	});
}
buttonToTop();

const certficateFocus = () => {
	const certificates = document.querySelectorAll(".certificate-parallax .img-container");
	certificates.forEach((certificate) => {
		certificate.addEventListener("click", function (e) {
			certificates.forEach((el) => el.classList.remove("click"));
			this.classList.add("click");
		});
	});
};
certficateFocus();

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
		setTimeout(() => containerImgLoading.remove(), 2000);
		setTimeout(() => allSection.map((e) => e.classList.remove("loading")), 2000);
	});
}
loading();
