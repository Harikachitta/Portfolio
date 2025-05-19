// Menu toggle for hamburger nav
function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  const hamburger = document.querySelector(".hamburger");

  if (menu && hamburger) {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Accessibility: toggle aria-expanded on hamburger button
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  }
}

// Event listener for hamburger click
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Scroll-triggered fade-in animations
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
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
