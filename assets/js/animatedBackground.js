// Day/night toggle. The initial theme is set inline in head.html before
// first paint; this keeps the toggle in sync and saves the visitor's choice.
function applyTheme(isDay) {
  // Always set an explicit value: with no attribute, the CSS falls back to
  // the OS preference, which would override a "night" choice on light systems.
  document.documentElement.setAttribute('data-theme', isDay ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('dayNightToggle');
  if (!toggle) return;

  toggle.checked = document.documentElement.getAttribute('data-theme') === 'light';

  toggle.addEventListener('change', function () {
    var isDay = this.checked;
    try {
      localStorage.setItem('theme', isDay ? 'day' : 'night');
    } catch (e) {}
    applyTheme(isDay);
  });

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
    var saved = null;
    try {
      saved = localStorage.getItem('theme');
    } catch (err) {}
    if (!saved) {
      toggle.checked = e.matches;
      applyTheme(e.matches);
    }
  });
});
