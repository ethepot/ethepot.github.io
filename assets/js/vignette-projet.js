// Sélectionner les conteneurs d'images qui ont l'attribut data-full
document.querySelectorAll('div[data-full]').forEach(container => {
  container.addEventListener('click', () => {
    const fullImageSrc = container.getAttribute('data-full');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    lightboxImg.src = fullImageSrc;
    lightbox.classList.add('show');
  });
});

document.getElementById('closeBtn').addEventListener('click', closeLightbox);

document.getElementById('lightbox').addEventListener('click', (e) => {
  // Ferme si clic en dehors de l'image
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  lightbox.classList.remove('show');
  lightboxImg.src = '';
}