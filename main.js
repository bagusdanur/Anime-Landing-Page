const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".back-video");
let slideIndex = 0;
let timer;

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
};

// Add active class to first slide and button
btns[0].classList.add("active");
slides[0].classList.add("active");

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 5000);
}

function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    sliderNav(slideIndex);
}

resetTimer();