const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

// La función permite alternar la visibilidad del menú en la página al agregar o quitar la clase 'inactive'
function toggleDesktopMenu() { 
 desktopMenu.classList.toggle('inactive')
}