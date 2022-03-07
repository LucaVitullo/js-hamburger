console.log('js ok')

const hamburgerMenu = document.querySelector('.hamburger-menu');

const hamburgerMenuOpen = document.querySelector('.header-right a i');

hamburgerMenuOpen.addEventListener('click', function () {
    console.log('HamburgerMenuOpen')
    hamburgerMenu.style.display = 'block'
})