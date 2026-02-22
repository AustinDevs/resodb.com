/* RESO DB — 4-Step Analytics Demo */

(function () {
  'use strict';

  /* ── Data from content/query-example.txt ── */
  var QUESTION = 'What are the zipcodes with the highest percent of closed listings sold above list price in the last 6 months within 5 miles of coordinates 30.3181, -97.748?';

  var SQL_CLICKHOUSE = 'SELECT\n    PostalCode,\n    count() AS closed_listings,\n    sum(if(ClosePrice > ListPrice, 1, 0)) AS sold_above_list_count,\n    round(100.0 * sold_above_list_count / closed_listings, 2) AS sold_above_list_pct\nFROM Property\nWHERE\n    (MlsStatus = \'Closed\' OR StandardStatus = \'Closed\')\n    AND CloseDate >= addMonths(today(), -6)\n    AND ClosePrice IS NOT NULL\n    AND ListPrice IS NOT NULL\n    AND Latitude IS NOT NULL\n    AND Longitude IS NOT NULL\n    AND greatCircleDistance(Longitude, Latitude, -97.748, 30.3181) <= 8046.72\n    AND PostalCode != \'\'\nGROUP BY PostalCode\nHAVING closed_listings >= 5\nORDER BY sold_above_list_pct DESC, closed_listings DESC\nLIMIT 100';

  var SQL_POSTGRES = 'SELECT\n    "PostalCode",\n    COUNT(*) AS closed_listings,\n    SUM(CASE WHEN "ClosePrice" > "ListPrice" THEN 1 ELSE 0 END) AS sold_above_list_count,\n    ROUND(100.0 * SUM(CASE WHEN "ClosePrice" > "ListPrice" THEN 1 ELSE 0 END) / COUNT(*), 2) AS sold_above_list_pct\nFROM "Property"\nWHERE\n    ("MlsStatus" = \'Closed\' OR "StandardStatus" = \'Closed\')\n    AND "CloseDate" >= CURRENT_DATE - INTERVAL \'6 months\'\n    AND "ClosePrice" IS NOT NULL\n    AND "ListPrice" IS NOT NULL\n    AND "Latitude" IS NOT NULL\n    AND "Longitude" IS NOT NULL\n    AND earth_distance(\n        ll_to_earth("Latitude", "Longitude"),\n        ll_to_earth(30.3181, -97.748)\n    ) <= 8046.72\n    AND "PostalCode" != \'\'\nGROUP BY "PostalCode"\nHAVING COUNT(*) >= 5\nORDER BY sold_above_list_pct DESC, closed_listings DESC\nLIMIT 100';

  var SQL_MYSQL = 'SELECT\n    PostalCode,\n    COUNT(*) AS closed_listings,\n    SUM(IF(ClosePrice > ListPrice, 1, 0)) AS sold_above_list_count,\n    ROUND(100.0 * SUM(IF(ClosePrice > ListPrice, 1, 0)) / COUNT(*), 2) AS sold_above_list_pct\nFROM Property\nWHERE\n    (MlsStatus = \'Closed\' OR StandardStatus = \'Closed\')\n    AND CloseDate >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)\n    AND ClosePrice IS NOT NULL\n    AND ListPrice IS NOT NULL\n    AND Latitude IS NOT NULL\n    AND Longitude IS NOT NULL\n    AND ST_Distance_Sphere(\n        POINT(Longitude, Latitude),\n        POINT(-97.748, 30.3181)\n    ) <= 8046.72\n    AND PostalCode != \'\'\nGROUP BY PostalCode\nHAVING closed_listings >= 5\nORDER BY sold_above_list_pct DESC, closed_listings DESC\nLIMIT 100';

  var SQL_SQLSERVER = 'SELECT TOP 100\n    PostalCode,\n    COUNT(*) AS closed_listings,\n    SUM(CASE WHEN ClosePrice > ListPrice THEN 1 ELSE 0 END) AS sold_above_list_count,\n    ROUND(100.0 * SUM(CASE WHEN ClosePrice > ListPrice THEN 1 ELSE 0 END) / COUNT(*), 2) AS sold_above_list_pct\nFROM Property\nWHERE\n    (MlsStatus = \'Closed\' OR StandardStatus = \'Closed\')\n    AND CloseDate >= DATEADD(MONTH, -6, GETDATE())\n    AND ClosePrice IS NOT NULL\n    AND ListPrice IS NOT NULL\n    AND Latitude IS NOT NULL\n    AND Longitude IS NOT NULL\n    AND geography::Point(Latitude, Longitude, 4326).STDistance(\n        geography::Point(30.3181, -97.748, 4326)\n    ) <= 8046.72\n    AND PostalCode != \'\'\nGROUP BY PostalCode\nHAVING COUNT(*) >= 5\nORDER BY sold_above_list_pct DESC, closed_listings DESC';

  var SQL_MAP = {
    clickhouse: SQL_CLICKHOUSE,
    postgresql: SQL_POSTGRES,
    mysql: SQL_MYSQL,
    sqlserver: SQL_SQLSERVER
  };

  var RESULTS = [
    { PostalCode: '78750', closed_listings: 21,  sold_above_list_count: 2,  sold_above_list_pct: 9.52 },
    { PostalCode: '78757', closed_listings: 347, sold_above_list_count: 29, sold_above_list_pct: 8.36 },
    { PostalCode: '78704', closed_listings: 276, sold_above_list_count: 23, sold_above_list_pct: 8.33 },
    { PostalCode: '78702', closed_listings: 423, sold_above_list_count: 35, sold_above_list_pct: 8.27 },
    { PostalCode: '78759', closed_listings: 133, sold_above_list_count: 11, sold_above_list_pct: 8.27 },
    { PostalCode: '78703', closed_listings: 281, sold_above_list_count: 21, sold_above_list_pct: 7.47 },
    { PostalCode: '78756', closed_listings: 150, sold_above_list_count: 11, sold_above_list_pct: 7.33 },
    { PostalCode: '78731', closed_listings: 262, sold_above_list_count: 19, sold_above_list_pct: 7.25 },
    { PostalCode: '78723', closed_listings: 383, sold_above_list_count: 27, sold_above_list_pct: 7.05 },
    { PostalCode: '78752', closed_listings: 158, sold_above_list_count: 11, sold_above_list_pct: 6.96 },
    { PostalCode: '78705', closed_listings: 433, sold_above_list_count: 30, sold_above_list_pct: 6.93 },
    { PostalCode: '78751', closed_listings: 260, sold_above_list_count: 18, sold_above_list_pct: 6.92 },
    { PostalCode: '78753', closed_listings: 44,  sold_above_list_count: 3,  sold_above_list_pct: 6.82 },
    { PostalCode: '78701', closed_listings: 331, sold_above_list_count: 20, sold_above_list_pct: 6.04 },
    { PostalCode: '78722', closed_listings: 98,  sold_above_list_count: 5,  sold_above_list_pct: 5.10 },
    { PostalCode: '78758', closed_listings: 123, sold_above_list_count: 6,  sold_above_list_pct: 4.88 },
    { PostalCode: '78721', closed_listings: 123, sold_above_list_count: 6,  sold_above_list_pct: 4.88 },
    { PostalCode: '78746', closed_listings: 169, sold_above_list_count: 8,  sold_above_list_pct: 4.73 },
    { PostalCode: '78730', closed_listings: 38,  sold_above_list_count: 0,  sold_above_list_pct: 0.00 }
  ];

  var AI_SUMMARY = 'Within 5 miles of (30.3181, -97.748) over the last 6 months, the highest share of homes selling above list was in <strong>78750</strong> (9.52%), but that result is based on a relatively small sample (21 closings; 2 above list). Among higher-volume ZIPs, the leaders were <strong>78757</strong> (8.36% on 347 closings), <strong>78704</strong> (8.33% on 276), <strong>78702</strong> (8.27% on 423), and <strong>78759</strong> (8.27% on 133) \u2014 all showing a similar \u201chigh single-digit\u201d above-list rate.<br><br>Overall, the market in this radius looks fairly consistent: most ZIP codes clustered between roughly 5% and 8% sold above list. On the lower end, <strong>78746</strong> (4.73% on 169), <strong>78721</strong> (4.88% on 123), and <strong>78758</strong> (4.88% on 123) had fewer above-list closings, and <strong>78730</strong> stood out as the weakest with 0% above list (0 of 38 closings). Net takeaway: even the top ZIPs are under 10% above list, suggesting pricing is generally holding and bidding wars are relatively limited.';

  var currentStep = 0;
  var sortCol = null;
  var sortAsc = true;

  function init() {
    var demo = document.getElementById('analytics-demo');
    if (!demo) return;

    // Step bar navigation
    demo.querySelectorAll('.step-item').forEach(function (el, i) {
      el.addEventListener('click', function () {
        if (i <= currentStep + 1) goToStep(i);
      });
    });

    // Analyze button (Step 1 → Step 2)
    var analyzeBtn = demo.querySelector('#analyze-btn');
    if (analyzeBtn) {
      analyzeBtn.addEventListener('click', function () {
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = '<span class="loading-dots">Analyzing</span>';
        setTimeout(function () {
          analyzeBtn.disabled = false;
          analyzeBtn.textContent = 'Analyze';
          goToStep(1);
        }, 1500);
      });
    }

    // SQL dialect dropdown
    var dialectSelect = demo.querySelector('#sql-dialect');
    if (dialectSelect) {
      dialectSelect.addEventListener('change', function () {
        updateSQL(dialectSelect.value);
      });
    }

    // Table sorting
    demo.querySelectorAll('.data-table th[data-col]').forEach(function (th) {
      th.addEventListener('click', function () {
        var col = th.dataset.col;
        if (sortCol === col) {
          sortAsc = !sortAsc;
        } else {
          sortCol = col;
          sortAsc = true;
        }
        renderTable(demo);
        // Update sort arrows
        demo.querySelectorAll('.data-table th').forEach(function (h) {
          h.classList.remove('sorted');
        });
        th.classList.add('sorted');
        th.querySelector('.sort-arrow').setAttribute('icon', sortAsc ? 'line-md:arrow-small-up' : 'line-md:arrow-small-down');
      });
    });

    goToStep(0);
  }

  function goToStep(step) {
    currentStep = step;
    var demo = document.getElementById('analytics-demo');

    // Update step bar
    demo.querySelectorAll('.step-item').forEach(function (el, i) {
      el.classList.remove('active', 'completed');
      if (i < step) el.classList.add('completed');
      if (i === step) el.classList.add('active');
    });
    demo.querySelectorAll('.step-connector').forEach(function (el, i) {
      el.classList.toggle('active', i < step);
    });

    // Show correct panel
    demo.querySelectorAll('.step-panel').forEach(function (el, i) {
      el.classList.toggle('active', i === step);
    });

    // Render step-specific content
    if (step === 2) renderTable(demo);
    if (step === 3 && typeof window.initDemoCharts === 'function') {
      window.initDemoCharts(RESULTS);
    }
  }

  function updateSQL(dialect) {
    var pre = document.querySelector('#sql-output');
    if (pre) {
      pre.textContent = SQL_MAP[dialect] || SQL_POSTGRES;
    }
  }

  function renderTable(demo) {
    var tbody = demo.querySelector('.data-table tbody');
    if (!tbody) return;

    var data = RESULTS.slice();
    if (sortCol) {
      data.sort(function (a, b) {
        var va = a[sortCol], vb = b[sortCol];
        if (typeof va === 'number') return sortAsc ? va - vb : vb - va;
        return sortAsc ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
      });
    }

    tbody.innerHTML = '';
    data.forEach(function (row) {
      var tr = document.createElement('tr');
      var pctClass = row.sold_above_list_pct >= 8 ? ' highlight' : '';
      tr.innerHTML =
        '<td>' + row.PostalCode + '</td>' +
        '<td class="num">' + row.closed_listings.toLocaleString() + '</td>' +
        '<td class="num">' + row.sold_above_list_count + '</td>' +
        '<td class="num' + pctClass + '">' + row.sold_above_list_pct.toFixed(2) + '%</td>';
      tbody.appendChild(tr);
    });

    // Update row count
    var toolbar = demo.querySelector('.data-table-toolbar');
    if (toolbar) toolbar.textContent = data.length + ' rows returned \u00b7 0.23s';
  }

  /* Expose for charts.js */
  window.DEMO_RESULTS = RESULTS;
  window.DEMO_AI_SUMMARY = AI_SUMMARY;
  window.DEMO_QUESTION = QUESTION;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
