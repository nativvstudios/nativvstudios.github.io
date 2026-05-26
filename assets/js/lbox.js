const lbox = document.createElement("div");
lbox.id = "lbox-overlay";
document.body.appendChild(lbox);

const images = document.querySelectorAll(".post-content img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    disableScroll();
    lbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lbox.firstChild) {
      lbox.removeChild(lbox.firstChild);
    }
    img.style.setProperty("cursor", "not-allowed");
    lbox.appendChild(img);
    lbox.style.setProperty("cursor", "zoom-out");
  });
});

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener('touchmove', preventDefault, wheelOpt);
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

lbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lbox.classList.remove("active");
  enableScroll();
});
