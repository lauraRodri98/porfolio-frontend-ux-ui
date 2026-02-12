const main = document.querySelector('main');
const maxScroll = 800; // scroll donde quieres que el fondo sea totalmente negro

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  let opacity = scrollTop / maxScroll;

  if(opacity > 1) opacity = 1; // no pasar de 1

  main.style.setProperty('--scroll-opacity', opacity);
  main.querySelector('::before'); // pseudo-elemento no se puede modificar directamente
  // usamos otra técnica: aplicar al mismo main
  main.style.setProperty('--opacity', opacity);
  main.style.opacity = 1; // para mantener contenido visible



});

// Como el pseudo-elemento no se puede acceder directamente, mejor hacemos así:
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'black';
overlay.style.pointerEvents = 'none';
overlay.style.zIndex = 0;
overlay.style.opacity = 0;
overlay.style.transition = 'opacity 0.1s linear';
document.body.appendChild(overlay);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  let opacity = scrollTop / 800;
  if(opacity > 1) opacity = 1;
  overlay.style.opacity = opacity;
});



const footer = document.querySelector('footer');

// Creamos overlay para el footer
const footerOverlay = document.createElement('div');
footerOverlay.id = 'footer-overlay';
footerOverlay.style.position = 'absolute';
footerOverlay.style.top = 0;
footerOverlay.style.left = 0;
footerOverlay.style.width = '100%';
footerOverlay.style.height = '100%';
footerOverlay.style.background =
  'linear-gradient(to bottom, black, transparent)'; // clave para que venga de arriba
footerOverlay.style.pointerEvents = 'none';
footerOverlay.style.opacity = 0;
footerOverlay.style.transition = 'opacity 0.1s linear';

footer.style.position = 'relative'; // muy importante
footer.prepend(footerOverlay);

// Scroll para el footer
window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  let progress = (windowHeight - footerTop) / 300; // controla velocidad del efecto

  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;

  footerOverlay.style.opacity = progress;
});