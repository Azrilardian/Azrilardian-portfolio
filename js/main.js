if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("./service-worker.js")
		.then(() => console.log("Succes Registration Service Worker"))
		.catch((err) => console.log("Registration Failed", err));
}

const spaActivation = () => {
	let page = window.location.hash.substr(1);
	if (page == "") page = "home";

	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("all-portfolio") || e.target.classList.contains("all-certificate")) {
			page = e.target.getAttribute("href").substr(1);
			if (page == "portfolio" || page == "certificate") setBackToHome();
			data();
		}
	});

	const setBackToHome = () => {
		const navigation = document.querySelectorAll("nav ul li a");
		navigation.forEach((e) =>
			e.addEventListener("click", () => {
				page = "home";
				data();
			})
		);
	};

	const loadPage = (page) => {
		return fetch(page).then((res) => {
			if (res.status === 200) return res.text();
			else if (res.status === 404) {
				const navContainer = document.querySelector("header nav");
				navContainer.classList.add("black");
				return `<p class="error-404">Yaah, halamannya gak ada :(</p>`;
			}
			return `<p style="text-align : center">Yaah, halamannya gak ada :(</p>`;
		});
	};

	const data = async () => {
		try {
			const pageContainer = document.querySelector(".pages-render");
			const pages = await loadPage(`./${page}.html`);
			window.scrollTo(0, 0);
			pageContainer.innerHTML = pages;
		} catch (err) {
			alert(err);
		}
	};
	if (page == "portfolio" || page == "certificate") setBackToHome();
	data();
};
spaActivation();

$(".page-scroll").on("click", function (e) {
	// ambil isi href
	let tujuan = $(this).attr("href");
	// tangkap elemen ybs
	let elemenTujuan = $(tujuan);

	// pindahkan scroll
	$("html,body").animate(
		{
			scrollTop: elemenTujuan.offset().top - 100,
		},
		1250,
		"easeInOutExpo"
	);

	e.preventDefault();
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
	const pagesRender = document.querySelector(".pages-render");
	const allSection = [body, footer, header, pagesRender];

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
