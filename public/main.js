const images = /** @type {{src: string, caption: string}[]} */ ([]);
let currentIndex = 0;
let isInitialized = false;

function initGallery() {
  if (isInitialized) return;
  
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    const anchor = /** @type {HTMLAnchorElement} */ (item);
    const img = /** @type {HTMLImageElement | null} */ (anchor.querySelector('img'));
    if (img) {
      images.push({
        src: img.src,
        caption: anchor.dataset.caption?.trim() || img.alt || ''
      });
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });
    }
  });

  document.getElementById('lightbox-close-btn')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev-btn')?.addEventListener('click', () => changeImage(-1));
  document.getElementById('lightbox-next-btn')?.addEventListener('click', () => changeImage(1));
  document.querySelector('.menu-toggle')?.addEventListener('click', toggleMenu);
  document.querySelector('.nav-links')?.addEventListener('click', toggleMenu);
  
  // Close lightbox when clicking on backdrop
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget && window.closeLightbox) {
      window.closeLightbox();
    }
  });
  
  isInitialized = true;
}

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = /** @type {HTMLImageElement | null} */ (document.getElementById('lightbox-img'));
  const lightboxCaption = document.getElementById('lightbox-caption');
  if (lightbox && lightboxImg) {
    lightboxImg.src = images[index]?.src || '';
    lightboxImg.alt = images[index]?.caption || 'Lightbox image';
    if (lightboxCaption) {
      lightboxCaption.textContent = images[index]?.caption || '';
      lightboxCaption.style.display = images[index]?.caption ? 'block' : 'none';
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  
  const lightboxImg = /** @type {HTMLImageElement | null} */ (document.getElementById('lightbox-img'));
  const lightboxCaption = document.getElementById('lightbox-caption');
  if (lightboxImg && images[currentIndex]) {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].caption || 'Lightbox image';
    if (lightboxCaption) {
      lightboxCaption.textContent = images[currentIndex].caption || '';
      lightboxCaption.style.display = images[currentIndex].caption ? 'block' : 'none';
    }
  }
}

function toggleMenu() {
  document.querySelector('.nav-links')?.classList.toggle('active');
  document.querySelector('.menu-toggle')?.classList.toggle('active');
}

document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}

// Make functions global for inline onclick handlers
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeImage = changeImage;
