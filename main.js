const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

//La función permite alternar la visibilidad del menú en la página al agregar o quitar la clase 'inactive'
function toggleDesktopMenu() { 
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() { 
    mobileMenu.classList.toggle('inactive')
}