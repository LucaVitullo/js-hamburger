console.log('js ok')

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuOpen = document.querySelector('.fa-bars');
const hamburgerMenuClose = document.querySelector('.fa-times');

/////FIRST OPTION/////

/*
hamburgerMenuOpen.addEventListener('click', function () {
    console.log('HamburgerMenuOpen')
    hamburgerMenu.style.display = 'block'
})

hamburgerMenuClose.addEventListener('click', function () {
    console.log('HamburgerMenuClose')
    hamburgerMenu.style.display = 'none'
})

*/


/////SECOND OPTION - BONUS//////

hamburgerMenuOpen.addEventListener('click',function () {
    console.log('HamburgerMenuOpen')
    hamburgerMenu.classList.add('active');
});
hamburgerMenuClose.addEventListener('click',function () {
    console.log('HamburgerMenuClose')
    hamburgerMenu.classList.remove('active');
});