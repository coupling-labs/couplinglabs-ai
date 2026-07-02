// Coupling Labs — minimal interactions, no dependencies

// 1. Hero coupling animation: fire when the SVG scrolls into view (and on load)
(function () {
  var stage = document.querySelector('.coupling-stage');
  if (!stage) return;

  function couple() { stage.classList.add('coupled'); }
  function decouple() { stage.classList.remove('coupled'); }

  if (!('IntersectionObserver' in window)) { couple(); return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { couple(); } else { decouple(); }
    });
  }, { threshold: 0.4 });
  io.observe(stage);
})();

// 2. CAD coordinate readout follows the pointer
(function () {
  var x = document.getElementById('cad-x');
  var y = document.getElementById('cad-y');
  if (!x || !y) return;
  var pad = function (n) { return String(n).padStart(4, '0'); };
  var ticking = false;
  window.addEventListener('pointermove', function (e) {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      x.textContent = 'X ' + pad(Math.round(e.clientX));
      y.textContent = 'Y ' + pad(Math.round(e.clientY));
      ticking = false;
    });
  }, { passive: true });
})();
