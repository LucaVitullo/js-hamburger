console.log('js ok')

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuOpen = document.querySelector('.fa-bars');
const hamburgerMenuClose = document.querySelector('.fa-times');

hamburgerMenuOpen.addEventListener('click', function () {
    console.log('HamburgerMenuOpen')
    hamburgerMenu.style.display = 'block'
})

hamburgerMenuClose.addEventListener('click', function () {
    console.log('HamburgerMenuClose')
    hamburgerMenu.style.display = 'none'
})