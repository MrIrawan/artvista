const navibar = document.querySelector('.navibar');
const menuIcon = document.querySelector('.menu-btn span');
let isMenuOnClick = false;

function fixedNavOnScroll() {
    if (window.scrollY >= 80) {
        navibar.classList.add('fixed-navibar');
    } else {
        navibar.classList.remove('fixed-navibar');
    }
}

function onMenuIconClick() {
    if (!isMenuOnClick) {
        menuIcon.innerHTML = 'menu_open';
        isMenuOnClick = true;
    } else {
        menuIcon.innerHTML = 'menu';
        isMenuOnClick = false;
    }
}

window.onscroll = fixedNavOnScroll;
menuIcon.onclick = onMenuIconClick;