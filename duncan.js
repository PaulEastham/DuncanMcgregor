const slides = document.querySelectorAll('.slide');

let current = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === i);
    });
}

setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 5000); //Sets length of displayed picture in seconds