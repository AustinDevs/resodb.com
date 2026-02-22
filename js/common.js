/* RESO DB — Common Utilities */

(function () {
  'use strict';

  /* ── Mobile Nav Toggle ── */
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.mobile-toggle');
    var navLinks = document.querySelector('.nav-links');
    var navActions = document.querySelector('.nav-actions');
    if (toggle) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        if (navLinks) navLinks.classList.toggle('open');
        if (navActions) navActions.classList.toggle('open');
      });
      // Close on link click
      document.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () {
          toggle.classList.remove('active');
          if (navLinks) navLinks.classList.remove('open');
          if (navActions) navActions.classList.remove('open');
        });
      });
    }

    /* ── Active Nav Link ── */
    var currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });

    /* ── FAQ Accordion ── */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var wasActive = item.classList.contains('active');
        // Close all
        document.querySelectorAll('.faq-item.active').forEach(function (el) {
          el.classList.remove('active');
        });
        if (!wasActive) item.classList.add('active');
      });
    });

    /* ── Smooth Scroll for Anchor Links ── */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          var offset = 80; // header height
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    /* ── Header Shadow on Scroll ── */
    var header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
          header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
        } else {
          header.style.boxShadow = 'none';
        }
      }, { passive: true });
    }
  });
})();
