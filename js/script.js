// SMOTH SCROLL
$(".page-scroll").on("click", function(e) {
    // ambil isi href
    var tujuan = $(this).attr("href");
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $("html,body").animate({
            scrollTop: elemenTujuan.offset().top - 100,
        },
        1250,
        "easeInOutExpo"
    );

    e.preventDefault();

    $(".jumbotron h1").css({
        "transform": "translate(0px, " + wScroll / 4 + "%)",
    });
});

//! Navigation
function navigation() {
    const burger = document.querySelector("header nav .burger");
    const navContainer = document.querySelector("header nav");
    const ul = document.querySelector("header nav ul");
    const li = document.querySelectorAll("header nav ul li");

    burger.addEventListener("click", function() {
        ul.classList.toggle("nav-active");
        li.forEach(function(links, index) {
            if (links.style.animation) links.style.animation = "";
            else {
                links.style.animation = "liFadeIn 0.3s ease forwards " + (index / 7 + 0.3) + "s";
            }
        });
        burger.classList.toggle("toggle");
    });

    window.addEventListener("scroll", function() {
        if (pageYOffset >= 200) navContainer.classList.add("black");
        else if (pageYOffset == 0) navContainer.classList.remove("black");
    });
}
navigation();

//! TypedWritting Effect
const typeWritter = function(txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
};

//? Type Method
typeWritter.prototype.type = function() {
    //? Current Index of Words
    const current = this.wordIndex % this.words.length;
    //? Get full text in Current
    const fullText = this.words[current];

    //? Check Deleting
    if (this.isDeleting) {
        //? Remove char
        this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
        //? Add char
        this.txt = fullText.substring(0, this.txt.length + 1);
    }

    //? Make TypeSpeed
    let typeSpeed = 100;
    if (this.isDeleting) {
        typeSpeed /= 5;
    }

    if (!this.isDeleting && this.txt === fullText) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 100;
    }

    //? Insert Text In To Element
    this.txtElement.innerHTML = '<span class="txt">' + this.txt + "</span>";
    setTimeout(() => this.type(), typeSpeed);
};

//? Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

function init() {
    txtElement = document.querySelector(".text");
    words = JSON.parse(txtElement.getAttribute("data-words"));
    wait = txtElement.getAttribute("data-wait");
    //? Init typeWritter
    new typeWritter(txtElement, words, wait);
}

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
    scrollEffect(".scrollEffect");
    scrollEffect(".team-parallax");
    scrollEffect(".progress-parallax");
    scrollEffectEach(".service-parallax");
    scrollEffectEach(".portofolio-parallax");
});

//! Button To Top
function buttonToTop() {
    const button = document.querySelector("a#button");
    window.addEventListener("scroll", function() {
        if (pageYOffset >= 500) button.classList.add("show");
        else if (pageYOffset < 500) button.classList.remove("show");
    });
}
buttonToTop();

//! Get Time
function getTime() {
    const p = document.querySelectorAll("p.time");
    p[0].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[1].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[2].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[3].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[4].innerHTML = moment().startOf("05:06").fromNow();
}
getTime();