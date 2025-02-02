const navibar = document.querySelector('.navibar');

function fixedNavOnScroll() {
    if (window.scrollY >= 80) {
        navibar.classList.add('fixed-navibar');
    } else {
        navibar.classList.remove('fixed-navibar');
    }
}

window.onload = () => {
    window.onscroll = fixedNavOnScroll;
}