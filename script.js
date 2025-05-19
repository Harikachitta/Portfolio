// Menu toggle for hamburger nav
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const nav = document.querySelector("nav"); // updated to generic nav element
    const menuIcon = document.querySelector(".menu-icon");

    menu.classList.toggle("open");
    nav.classList.toggle("open");

    // Accessibility: toggle aria-expanded on hamburger icon if present
    if (menuIcon) {
        const expanded = menuIcon.getAttribute("aria-expanded") === "true";
        menuIcon.setAttribute("aria-expanded", !expanded);
    }
}

// Scroll-triggered fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
