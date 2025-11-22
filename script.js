/* --- MENU MOVIL --- */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

/* --- MODO OSCURO --- */
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* --- ANIMACIONES AL HACER SCROLL --- */
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let r of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = r.getBoundingClientRect().top;
        const visiblePoint = 120;

        if (elementTop < windowHeight - visiblePoint) {
            r.classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* --- SLIDER AUTOMÁTICO --- */
const slider = document.getElementById("slider");
let scrollAmount = 0;

setInterval(() => {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    } else {
        scrollAmount += 350;
    }
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
}, 3000);
