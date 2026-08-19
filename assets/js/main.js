(function () {
  'use strict';

  /* =====================================================================
     SIGNUP CONFIGURATION

     This is a static site, so the form needs somewhere to POST to.
     Set SIGNUP_ENDPOINT to your handler and the form submits in the
     background. Leave it empty and the form falls back to opening a
     pre-filled email to SIGNUP_EMAIL, which works with no backend at all.

     See SIGNUP_SETUP.md for the three supported options.
     ===================================================================== */
  var SIGNUP_ENDPOINT = '';                          // e.g. 'https://sparkypawscare.com/api/subscribe'
  var SIGNUP_EMAIL    = 'hello@sparkypawscare.com';  // mailto fallback target

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth < 900) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

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

  /* ---- Newsletter signup ---- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setStatus(el, state, message) {
    if (!el) return;
    el.setAttribute('data-state', state);
    el.textContent = message;
  }

  Array.prototype.forEach.call(document.querySelectorAll('.signup__form'), function (form) {
    var input  = form.querySelector('.signup__input');
    var status = form.querySelector('.signup__status');
    var button = form.querySelector('button[type="submit"]');
    var trap   = form.querySelector('.signup__trap input');

    if (!input) return;

    // Clear the error state as soon as the person starts correcting it
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') {
        input.removeAttribute('aria-invalid');
        setStatus(status, '', '');
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Bot filled the hidden field — pretend it worked, do nothing
      if (trap && trap.value) {
        setStatus(status, 'success', 'Thanks — you are on the list.');
        form.reset();
        return;
      }

      var email = (input.value || '').trim();

      if (!EMAIL_RE.test(email)) {
        input.setAttribute('aria-invalid', 'true');
        setStatus(status, 'error', 'That does not look like a valid email address.');
        input.focus();
        return;
      }

      input.removeAttribute('aria-invalid');

      // --- No endpoint configured: fall back to a pre-filled email ---
      if (!SIGNUP_ENDPOINT) {
        var subject = encodeURIComponent('Newsletter signup');
        var body = encodeURIComponent(
          'Please add this address to the SparkyPawsCare newsletter:\n\n' + email + '\n'
        );
        setStatus(status, 'pending', 'Opening your email app to finish signing up…');
        window.location.href =
          'mailto:' + SIGNUP_EMAIL + '?subject=' + subject + '&body=' + body;
        return;
      }

      // --- Endpoint configured: submit in the background ---
      if (button) { button.disabled = true; }
      setStatus(status, 'pending', 'Signing you up…');

      fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email: email,
          source: window.location.pathname
        })
      })
        .then(function (res) {
          if (!res.ok) { throw new Error('HTTP ' + res.status); }
          form.reset();
          setStatus(status, 'success', 'You are on the list. Check your inbox to confirm.');
        })
        .catch(function () {
          setStatus(
            status,
            'error',
            'Something went wrong. Email ' + SIGNUP_EMAIL + ' and we will add you manually.'
          );
        })
        .then(function () {
          if (button) { button.disabled = false; }
        });
    });
  });

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
