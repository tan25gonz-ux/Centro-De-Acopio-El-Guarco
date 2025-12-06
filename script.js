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
/* --- CUENTA REGRESIVA AÑO NUEVO --- */
function startCountdown() {
    // Establecer la fecha de destino: 1 de Enero del próximo año (2026)
    const year = new Date().getFullYear();
    const newYearDate = new Date(`January 1, ${year + 1} 00:00:00`).getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = newYearDate - now;

        // Cálculos de tiempo (Días, Horas, Minutos, Segundos)
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Buscar los elementos HTML
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        const messageElement = document.getElementById("countdown-message");
        
        // Actualizar el contenido con formato de dos dígitos
        if (daysElement) daysElement.innerHTML = days < 10 ? '0' + days : days;
        if (hoursElement) hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
        if (minutesElement) minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        if (secondsElement) secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // Si la cuenta regresiva termina (distance < 0), mostrar mensaje final
        if (distance < 0) {
            clearInterval(timer);
            if (daysElement) daysElement.innerHTML = "00";
            if (hoursElement) hoursElement.innerHTML = "00";
            if (minutesElement) minutesElement.innerHTML = "00";
            if (secondsElement) secondsElement.innerHTML = "00";
            if (messageElement) messageElement.innerHTML = "¡Feliz Año Nuevo 2026! 🎉🥂";
        }
    }, 1000);
}

// Llamar a la función al cargar la página
window.addEventListener("load", startCountdown);