var nightColors = [
    [15, 17, 28],   // deep navy
    [20, 22, 38],   // dark blue
    [28, 20, 42],   // deep indigo
    [22, 28, 40],   // dark blue-gray
    [38, 28, 58],   // deep purple
    [18, 24, 35]];  // dark slate blue

var dayColors = [
    [248, 248, 252],  // pale cool white
    [242, 244, 250],  // soft blue-white
    [244, 240, 248],  // pale lavender-white
    [250, 248, 244],  // warm white
    [240, 246, 250],  // pale sky
    [246, 244, 248]]; // soft neutral

var colors = nightColors.slice();

var step = 0;
var colorIndices = [0, 1, 2, 3];

// at 60fps: 1/(60*12) ≈ 0.0014 → ~12s per transition
var gradientSpeed = 0.0014;

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function applyTheme(isDay) {
  var root = document.documentElement;
  if (isDay) {
    root.style.setProperty('--navbar-color', 'var(--dayBtn)');
    document.body.style.color = "var(--gray-6)";
    root.style.setProperty('--article-color', 'rgba(255, 255, 255, 0.75)');
    root.style.setProperty('--article-hover-color', 'rgba(240, 242, 255, 0.88)');
    root.style.setProperty('--article-border', 'rgba(0, 0, 0, 0.06)');
    root.style.setProperty('--post-bg', 'rgba(255, 255, 255, 0.96)');
    root.style.setProperty('--modal-bg', '#ffffff');
    root.style.setProperty('--modal-hover-bg', '#f0f0f0');
    root.style.setProperty('--modal-text', 'var(--gray-6)');
    root.style.setProperty('--img-hover-border', '#5628EE');
    root.style.setProperty('--img-hover-shadow', '0 0 0 4px rgba(86,40,238,0.4)');
    root.style.setProperty('--img-hover-outline', 'none');
    root.style.setProperty('--overlay-bg', 'rgba(255,255,255,0.85)');
    root.style.setProperty('--overlay-text', '#111111');
    root.style.setProperty('--text-color', 'var(--day-text-color)');
    root.style.setProperty('--category-color', 'var(--dayBtn)');
    root.style.setProperty('--category-bg-color', '#fff');
    root.style.setProperty('--site-title-gradient', 'linear-gradient(to right, #25282c 30%, #3f3f3f 100%)');
    root.style.setProperty('--social-btn-color', 'var(--night)');
    colors = dayColors.slice();
  } else {
    root.style.setProperty('--navbar-color', 'cyan');
    document.body.style.color = "var(--white-2)";
    root.style.setProperty('--article-color', 'rgba(10, 12, 20, 0.72)');
    root.style.setProperty('--article-hover-color', 'rgba(20, 24, 36, 0.80)');
    root.style.setProperty('--article-border', 'rgba(255, 255, 255, 0.07)');
    root.style.setProperty('--post-bg', 'rgba(10, 12, 20, 0.94)');
    root.style.setProperty('--modal-bg', '#282c34');
    root.style.setProperty('--modal-hover-bg', '#383E4A');
    root.style.setProperty('--modal-text', 'var(--white-2)');
    root.style.setProperty('--img-hover-border', 'white');
    root.style.setProperty('--img-hover-shadow', '0 3px 26px 0 rgba(255,255,255,0.43)');
    root.style.setProperty('--img-hover-outline', '2px solid white');
    root.style.setProperty('--overlay-bg', 'rgba(13,13,13,.7)');
    root.style.setProperty('--overlay-text', '#ffffff');
    root.style.setProperty('--text-color', 'var(--night-text-color)');
    root.style.setProperty('--category-color', 'var(--white-2)');
    root.style.setProperty('--category-bg-color', 'var(--gray-4)');
    root.style.setProperty('--site-title-gradient', 'linear-gradient(to right, #eeeeee 30%, #a9abb3 100%)');
    root.style.setProperty('--social-btn-color', 'var(--day)');
    colors = nightColors.slice();
  }
}

$(document).ready(function(){
    var toggle = document.getElementById('dayNightToggle');

    // Restore saved preference, or fall back to system preference
    var saved = localStorage.getItem('theme');
    if (saved === 'day') {
      toggle.checked = true;
      applyTheme(true);
    } else if (saved === 'night') {
      toggle.checked = false;
      applyTheme(false);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      toggle.checked = true;
      applyTheme(true);
    }

    // Listen for toggle changes
    $("#dayNightToggle").change(function() {
        var isDay = this.checked;
        localStorage.setItem('theme', isDay ? 'day' : 'night');
        applyTheme(isDay);
    });

    // Listen for system preference changes (only if no saved preference)
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        toggle.checked = e.matches;
        applyTheme(e.matches);
      }
    });
});

var gradientEl = null;
var circleEl = null;
var pageBtnEl = null;

function updateGradient() {
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var t = smoothstep(step);

  var r1 = lerp(c0_0[0], c0_1[0], t);
  var g1 = lerp(c0_0[1], c0_1[1], t);
  var b1 = lerp(c0_0[2], c0_1[2], t);

  var r2 = lerp(c1_0[0], c1_1[0], t);
  var g2 = lerp(c1_0[1], c1_1[1], t);
  var b2 = lerp(c1_0[2], c1_1[2], t);

  var gradient = "linear-gradient(135deg, rgb(" + r1 + "," + g1 + "," + b1 + ") 0%, rgb(" + r2 + "," + g2 + "," + b2 + ") 100%)";

  if (!gradientEl) gradientEl = document.getElementById('gradient');
  if (!circleEl) circleEl = document.querySelector('.circle');
  if (!pageBtnEl) pageBtnEl = document.querySelector('a.PageNotFoundButton');

  document.documentElement.style.background = gradient;
  if (gradientEl) gradientEl.style.background = gradient;
  if (circleEl) circleEl.style.background = gradient;
  if (pageBtnEl) pageBtnEl.style.background = gradient;

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  }

  requestAnimationFrame(updateGradient);
}

requestAnimationFrame(updateGradient);
