document.addEventListener("scroll", () => {
  document.querySelectorAll('.timeline-event').forEach(event => {
    const rect = event.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      event.classList.add("visible");
    } else {
      event.classList.remove("visible");
    }
  });
});

// Trigger on load for events in view at start
window.dispatchEvent(new Event('scroll'));
