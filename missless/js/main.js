/* =========================================
   Missless — Main JS
   ========================================= */

(function () {
  'use strict';

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.revealDelay || '0', 10);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  /* ---------- Audio tabs ---------- */
  const tabs       = document.querySelectorAll('.audio-tab');
  const audioTitle = document.getElementById('audioTitle');

  const tabMap = {
    home:       'Home services • 30 seconds',
    finance:    'Financial services • 35 seconds',
    health:     'Healthcare and dental • 30 seconds',
    realestate: 'Real estate • 40 seconds',
    retail:     'Retail and e-commerce • 30 seconds',
    education:  'Education • 35 seconds'
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.industry;
      if (audioTitle && tabMap[key]) {
        audioTitle.textContent = tabMap[key];
      }
    });
  });

  /* ---------- Audio play button (placeholder feedback) ---------- */
  const playBtn = document.querySelector('.audio-play');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playBtn.style.transform = 'scale(0.95)';
      setTimeout(() => { playBtn.style.transform = ''; }, 150);
    });
  }

  /* ---------- Smooth-scroll offset for sticky nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.querySelector('.nav-wrap').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
