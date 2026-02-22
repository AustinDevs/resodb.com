/* RESO DB — Chart.js Visualizations for Step 4 */

(function () {
  'use strict';

  var chartInstance = null;

  window.initDemoCharts = function (results) {
    if (!results) results = window.DEMO_RESULTS;
    if (!results) return;

    var canvas = document.getElementById('demo-chart');
    if (!canvas) return;

    // Destroy previous instance
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }

    var ctx = canvas.getContext('2d');

    // Top 10 by percentage for chart readability
    var top = results.filter(function (r) { return r.sold_above_list_pct > 0; }).slice(0, 10);
    var labels = top.map(function (r) { return r.PostalCode; });
    var pctData = top.map(function (r) { return r.sold_above_list_pct; });
    var countData = top.map(function (r) { return r.closed_listings; });

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sold Above List %',
            data: pctData,
            backgroundColor: 'rgba(59, 130, 246, 0.7)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1,
            borderRadius: 4,
            yAxisID: 'y'
          },
          {
            label: 'Total Closings',
            data: countData,
            type: 'line',
            borderColor: 'rgba(16, 185, 129, 0.8)',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            pointBackgroundColor: 'rgba(16, 185, 129, 1)',
            pointRadius: 4,
            borderWidth: 2,
            fill: false,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            labels: { color: '#94a3b8', font: { size: 11 } }
          },
          tooltip: {
            backgroundColor: '#1e2130',
            titleColor: '#e2e8f0',
            bodyColor: '#94a3b8',
            borderColor: '#2a2d3a',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            ticks: { color: '#94a3b8', font: { size: 11 } },
            grid: { color: 'rgba(255,255,255,0.04)' }
          },
          y: {
            position: 'left',
            title: { display: true, text: 'Above List %', color: '#94a3b8' },
            ticks: {
              color: '#94a3b8',
              callback: function (v) { return v + '%'; }
            },
            grid: { color: 'rgba(255,255,255,0.04)' },
            beginAtZero: true
          },
          y1: {
            position: 'right',
            title: { display: true, text: 'Closings', color: '#94a3b8' },
            ticks: { color: '#94a3b8' },
            grid: { drawOnChartArea: false },
            beginAtZero: true
          }
        }
      }
    });

    // Populate AI summary
    var summaryEl = document.querySelector('.ai-summary-text');
    if (summaryEl && window.DEMO_AI_SUMMARY) {
      summaryEl.innerHTML = window.DEMO_AI_SUMMARY;
    }
  };
})();
