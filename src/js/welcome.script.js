import { getDataFromAPI } from "./utils/API.js";
const navibar = document.querySelector('.navibar');

function fixedNavOnScroll() {
    if (window.scrollY >= 80) {
        navibar.classList.add('fixed-navibar');
    } else {
        navibar.classList.remove('fixed-navibar');
    }
}

getDataFromAPI("https://api.unsplash.com/photos/?client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4")

window.onload = () => {
    window.onscroll = fixedNavOnScroll;
}