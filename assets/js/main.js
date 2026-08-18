(function () {
  'use strict';

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close when a link is tapped on mobile
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth < 900) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Reset state when resizing back to desktop
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth >= 900) {
          links.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }, 150);
    });
  }

  /* ---- Scroll reveal ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('[data-reveal]');

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Stagger siblings within the same container for a sequenced reveal
  Array.prototype.forEach.call(targets, function (el) {
    var siblings = Array.prototype.filter.call(
      el.parentNode.children,
      function (c) { return c.hasAttribute && c.hasAttribute('data-reveal'); }
    );
    var index = siblings.indexOf(el);
    if (index > 0) {
      el.style.setProperty('--reveal-delay', Math.min(index, 6) * 70 + 'ms');
    }
    observer.observe(el);
  });
})();
