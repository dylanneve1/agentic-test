// JavaScript for theme toggle, mobile navigation, and scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    if (root.dataset.theme === 'light') {
      root.dataset.theme = 'dark';
      themeToggle.textContent = '☀️';
    } else {
      root.dataset.theme = 'light';
      themeToggle.textContent = '🌙';
    }
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    navToggle.classList.toggle('toggle');
  });

  // Scroll reveal for hidden sections
  const hiddenElements = document.querySelectorAll('.hidden');
  const observerOptions = { threshold: 0.1 };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  hiddenElements.forEach(el => revealObserver.observe(el));
});