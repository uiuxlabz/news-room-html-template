/**
 * NEWSROOM — Press Room & Media Hub
 * Main JavaScript — burger, nav, year, reveal, form
 */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     0. Preferences
     ---------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ----------------------------------------------------------
     1. DOM Ready
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    burgerToggle();
    activeNav();
    updateYear();
    revealOnScroll();
    formHandler();
    stickyHeaderShadow();
  }

  /* ----------------------------------------------------------
     2. Burger Toggle (mobile nav)
     ---------------------------------------------------------- */
  function burgerToggle() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      burger.classList.toggle('active');
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        nav.classList.contains('open') &&
        !nav.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        nav.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------------------------
     3. Active Navigation Link
     ---------------------------------------------------------- */
  function activeNav() {
    const links = document.querySelectorAll('.nav__link');
    const current = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;
      const page = href.split('/').pop();
      if (page === current) {
        link.classList.add('active');
      }
    });
  }

  /* ----------------------------------------------------------
     4. Dynamic Year ([data-year])
     ---------------------------------------------------------- */
  function updateYear() {
    var els = document.querySelectorAll('[data-year]');
    var year = new Date().getFullYear();
    els.forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ----------------------------------------------------------
     5. Intersection Observer — Reveal Animations
     ---------------------------------------------------------- */
  function revealOnScroll() {
    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger > *'
      ).forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var targets = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger > *'
    );

    if (!targets.length) return;

    // Stagger children within .stagger containers
    var staggerContainers = document.querySelectorAll('.stagger');
    staggerContainers.forEach(function (container) {
      var children = container.children;
      Array.prototype.forEach.call(children, function (child, i) {
        child.style.transitionDelay = (i * 100) + 'ms';
      });
    });

    if (!('IntersectionObserver' in window)) {
      // Fallback: show all
      targets.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     6. Form Handler ([data-form])
     ---------------------------------------------------------- */
  function formHandler() {
    var forms = document.querySelectorAll('[data-form]');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var okEl = form.querySelector('.form-ok');
        var errEl = form.querySelector('.form-err');
        var valid = true;

        // Simple required-field check
        var required = form.querySelectorAll('[required]');
        required.forEach(function (field) {
          if (!field.value.trim()) {
            valid = false;
            field.style.borderColor = '#DC2626';
          } else {
            field.style.borderColor = '';
          }
        });

        // Email validation
        var emailField = form.querySelector('[type="email"]');
        if (emailField && emailField.value) {
          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailField.value)) {
            valid = false;
            emailField.style.borderColor = '#DC2626';
          }
        }

        // Show feedback
        if (okEl) okEl.classList.remove('show');
        if (errEl) errEl.classList.remove('show');

        if (valid) {
          if (okEl) okEl.classList.add('show');
          form.reset();
          // Scroll to success message
          okEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          if (errEl) errEl.classList.add('show');
          errEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });

      // Clear error styling on input
      form.querySelectorAll('input, textarea, select').forEach(function (field) {
        field.addEventListener('input', function () {
          this.style.borderColor = '';
        });
      });
    });
  }

  /* ----------------------------------------------------------
     7. Sticky Header Shadow
     ---------------------------------------------------------- */
  function stickyHeaderShadow() {
    var header = document.querySelector('.header');
    if (!header) return;

    var lastScroll = 0;

    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
      } else {
        header.style.boxShadow = '';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
})();
