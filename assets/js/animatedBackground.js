var nightColors = [
    [19,20,23],
    [25,26,31],
    [30,31,38],
    [33,35,40],
    [55,39,73],
    [37,40,44]];

var dayColors = [
    [244,244,244],
    [232,232,232],
    [225,225,225],
    [215,215,215],
    [215,215,215],
    [225,225,225]];

var colors = nightColors.slice();

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.004;

function applyTheme(isDay) {
  var root = document.documentElement;
  if (isDay) {
    root.style.setProperty('--navbar-color', 'var(--dayBtn)');
    document.body.style.color = "var(--gray-6)";
    root.style.setProperty('--article-color', '#ffffff');
    root.style.setProperty('--article-hover-color', '#e8e8e8');
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
    root.style.setProperty('--article-color', '#2c303a');
    root.style.setProperty('--article-hover-color', '#4e5463');
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
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left bottom, right bottom, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
      $('html').css({
        background: "-webkit-gradient(linear, left bottom, right bottom, from("+color1+"), to("+color2+"))"}).css({
         background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

      $('a.PageNotFoundButton').css({
        background: "-webkit-gradient(linear, left bottom, right bottom, from("+color1+"), to("+color2+"))"}).css({
         background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

         $('.circle').css({
          background: "-webkit-gradient(linear, left bottom, right bottom, from("+color1+"), to("+color2+"))"}).css({
           background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});


    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,20);

  
