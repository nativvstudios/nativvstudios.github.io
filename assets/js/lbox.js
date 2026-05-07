const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".post-content img");
const portImages = document.querySelectorAll(".portfolio-grid .card-glass img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    disableScroll();
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    img.style.setProperty("cursor", "not-allowed");
    lightbox.appendChild(img);
    lightbox.style.setProperty("cursor", "zoom-out");
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

portImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    disableScroll();
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    img.style.setProperty("cursor", "not-allowed");
    lightbox.appendChild(img);
    lightbox.style.setProperty("cursor", "zoom-out");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
  enableScroll();
});
