const slides = [...document.querySelectorAll(".slide")];
const dotLinks = [...document.querySelectorAll("[data-slide-link]")];
let activeIndex = 0;
let isAnimating = false;

function setActive(index) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));
  dotLinks.forEach((link, idx) => {
    link.classList.toggle("is-active", idx === activeIndex);
  });
  slides.forEach((slide, idx) => {
    slide.classList.toggle("is-visible", idx === activeIndex);
  });
}

function goToSlide(index) {
  const target = slides[Math.max(0, Math.min(index, slides.length - 1))];
  if (!target) return;
  isAnimating = true;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    isAnimating = false;
  }, 700);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = slides.indexOf(entry.target);
      if (index >= 0) setActive(index);
    });
  },
  {
    threshold: 0.55,
  },
);

slides.forEach((slide) => observer.observe(slide));
setActive(0);

window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "PageDown", " ", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
    if (!isAnimating) goToSlide(activeIndex + 1);
  }

  if (["ArrowUp", "PageUp", "ArrowLeft"].includes(event.key)) {
    event.preventDefault();
    if (!isAnimating) goToSlide(activeIndex - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    if (!isAnimating) goToSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    if (!isAnimating) goToSlide(slides.length - 1);
  }
});
