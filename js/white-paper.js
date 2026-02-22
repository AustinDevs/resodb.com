/* RESO DB — White Paper ToC Scroll Tracking */

(function () {
  'use strict';

  function init() {
    var tocLinks = document.querySelectorAll('.wp-toc a');
    var sections = [];

    tocLinks.forEach(function (link) {
      var id = link.getAttribute('href');
      if (id && id.startsWith('#')) {
        var section = document.querySelector(id);
        if (section) {
          sections.push({ el: section, link: link });
        }
      }
    });

    if (!sections.length) return;

    var offset = 100; // header + some padding

    function updateActive() {
      var scrollY = window.scrollY + offset;
      var current = null;

      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= scrollY) {
          current = sections[i];
          break;
        }
      }

      tocLinks.forEach(function (l) { l.classList.remove('active'); });
      if (current) current.link.classList.add('active');
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
