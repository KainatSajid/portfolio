// Animate the main title on load
window.addEventListener('load', () => {
  gsap.from("#main-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".project-card", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    delay: 0.5,
    ease: "power2.out"
  });
});
