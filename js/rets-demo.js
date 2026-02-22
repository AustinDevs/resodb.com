/* RESO DB — RETS → RESO 2.0 Mapping Animation */

(function () {
  'use strict';

  var FIELD_MAPPINGS = [
    { rets: 'L_AskingPrice',     reso: 'ListPrice',             retsVal: '719000',                          resoVal: '719000' },
    { rets: 'L_ListingID',       reso: 'ListingId',             retsVal: '1930608',                         resoVal: '1930608' },
    { rets: 'LM_Char10_1',      reso: 'CountyOrParish',        retsVal: 'Bexar',                           resoVal: 'Bexar' },
    { rets: 'L_City',            reso: 'City',                  retsVal: 'San Antonio',                     resoVal: 'San Antonio' },
    { rets: 'L_ZipCode',        reso: 'PostalCode',            retsVal: '78212',                            resoVal: '78212' },
    { rets: 'Bedrooms',         reso: 'BedroomsTotal',         retsVal: '3',                                resoVal: '3' },
    { rets: 'FullBaths',        reso: 'BathroomsFull',         retsVal: '3',                                resoVal: '3' },
    { rets: 'L_SquareFeet',     reso: 'LivingArea',            retsVal: '1785',                             resoVal: '1785' },
    { rets: 'YEARBUILT',        reso: 'YearBuilt',             retsVal: '1923',                             resoVal: '1923' },
    { rets: 'L_Status_N',       reso: 'MlsStatus',             retsVal: 'Sold',                             resoVal: 'Sold' },
    { rets: 'L_DOM',            reso: 'DaysOnMarket',          retsVal: '21',                               resoVal: '21' },
    { rets: 'L_SoldPrice',      reso: 'ClosePrice',            retsVal: '738500',                           resoVal: '738500' }
  ];

  var TOTAL_RETS = 227;
  var TOTAL_RESO = 85;

  function init() {
    var container = document.getElementById('rets-demo');
    if (!container) return;

    buildTable(container);

    // IntersectionObserver trigger
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(container);
          runAnimation();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(container);

    // Replay button
    var replayBtn = container.querySelector('.btn-replay');
    if (replayBtn) {
      replayBtn.addEventListener('click', function () {
        resetRows();
        runAnimation();
      });
    }
  }

  function buildTable(container) {
    var tbody = container.querySelector('.rets-demo-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    FIELD_MAPPINGS.forEach(function (m, i) {
      var tr = document.createElement('tr');
      tr.className = 'pending';
      tr.dataset.index = i;
      tr.innerHTML =
        '<td class="rets-field">' + m.rets + '</td>' +
        '<td class="rets-value">' + m.retsVal + '</td>' +
        '<td class="arrow-cell">→</td>' +
        '<td class="reso-field">' + m.reso + '</td>' +
        '<td class="reso-value">' + m.resoVal + '</td>';
      tbody.appendChild(tr);
    });
  }

  function resetRows() {
    var rows = document.querySelectorAll('.rets-demo-tbody tr');
    rows.forEach(function (tr) {
      tr.className = 'pending';
    });
    var stat = document.querySelector('.rets-demo-stat');
    if (stat) stat.style.opacity = '0';
  }

  function runAnimation() {
    var rows = document.querySelectorAll('.rets-demo-tbody tr');
    var delay = 0;

    rows.forEach(function (tr, i) {
      // Scanning phase
      setTimeout(function () {
        tr.classList.remove('pending');
        tr.classList.add('scanning');
      }, delay);

      // Mapped phase
      setTimeout(function () {
        tr.classList.remove('scanning');
        tr.classList.add('mapped');
      }, delay + 300);

      delay += 250;
    });

    // Show summary stat after all rows
    setTimeout(function () {
      var stat = document.querySelector('.rets-demo-stat');
      if (stat) {
        stat.style.opacity = '1';
        stat.style.transition = 'opacity 0.5s';
      }
    }, delay + 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
