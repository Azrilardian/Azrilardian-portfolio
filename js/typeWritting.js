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