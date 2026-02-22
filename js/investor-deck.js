/* RESO DB — Investor Deck Navigation */

(function () {
  'use strict';

  var currentSlide = 0;
  var totalSlides = 0;
  var slides = [];
  var touchStartX = 0;

  function init() {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    if (!totalSlides) return;

    // Show first slide
    goTo(0);

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(totalSlides - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    });

    // Button navigation
    var prevBtn = document.getElementById('deck-prev');
    var nextBtn = document.getElementById('deck-next');
    var fsBtn = document.getElementById('deck-fullscreen');
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

    // Touch swipe
    var container = document.querySelector('.deck-container');
    if (container) {
      container.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      container.addEventListener('touchend', function (e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) next(); else prev();
        }
      }, { passive: true });
    }

    // Click to advance (on slide body, not on links/buttons)
    if (container) {
      container.addEventListener('click', function (e) {
        if (e.target.closest('.deck-nav') || e.target.closest('a') || e.target.closest('button')) return;
        var rect = container.getBoundingClientRect();
        if (e.clientX > rect.width * 0.5) next(); else prev();
      });
    }
  }

  function goTo(n) {
    if (n < 0) n = 0;
    if (n >= totalSlides) n = totalSlides - 1;
    currentSlide = n;

    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === n);
    });

    var counter = document.querySelector('.slide-counter');
    if (counter) counter.textContent = (n + 1) + ' / ' + totalSlides;
  }

  function next() { goTo(currentSlide + 1); }
  function prev() { goTo(currentSlide - 1); }

  function toggleFullscreen() {
    var el = document.documentElement;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
