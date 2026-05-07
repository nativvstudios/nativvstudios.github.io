function applyTheme(isDay) {
  if (isDay) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

$(document).ready(function(){
    var toggle = document.getElementById('dayNightToggle');

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

    $("#dayNightToggle").change(function() {
        var isDay = this.checked;
        localStorage.setItem('theme', isDay ? 'day' : 'night');
        applyTheme(isDay);
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        toggle.checked = e.matches;
        applyTheme(e.matches);
      }
    });
});
