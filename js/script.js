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
		if (pageYOffset >= 200) navContainer.classList.add("black");
		else if (pageYOffset == 0) navContainer.classList.remove("black");
	});
}
navigation();

//! Button To Top
function buttonToTop() {
	const button = document.querySelector("a#button");
	window.addEventListener("scroll", function () {
		if (pageYOffset >= 500) button.classList.add("show");
		else if (pageYOffset < 500) button.classList.remove("show");
	});
}
buttonToTop();

function loading() {
	const body = document.querySelector("body");
	const containerImgLoading = document.querySelector(".img-loading");
	const section = document.querySelectorAll("section");
	const header = document.querySelector("header");

	section.forEach((e) => e.classList.add("loading"));
	header.classList.add("loading");
	body.classList.add("loading");

	window.addEventListener("load", () => {
		section.forEach((e) => e.classList.remove("loading"));
		header.classList.remove("loading");
		body.classList.remove("loading");
		containerImgLoading.remove();
	});
}
loading();
