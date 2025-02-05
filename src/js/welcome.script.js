import { getDataFromAPI } from "./utils/API.js";
const navibar = document.querySelector('.navibar');
const resultContainer = document.querySelector('.try-feature .feature-result');
const featureSearchInput = document.querySelector('#feature-search');
const exploreBtn = document.querySelector('.try-feature div button');

function fixedNavOnScroll() {
    if (window.scrollY >= 80) {
        navibar.classList.add('fixed-navibar');
    } else {
        navibar.classList.remove('fixed-navibar');
    }
}

async function onTryFeatureHandler() {
    resultContainer.innerHTML = "";

    if (featureSearchInput.value === "") {
        resultContainer.innerHTML = `
            <p style="display: inline-block; margin: auto 0; height: fit-content; width: 100%; text-align: center;">Please enter a keyword</p>
        `;

        return;
    }
    
    try {
        const keyword = encodeURIComponent(featureSearchInput.value);
        const apiUrl = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=10&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
        
        const result = await getDataFromAPI(apiUrl).then(data => data.results);
        result.forEach(data => {
            resultContainer.insertAdjacentHTML('beforeend', `
                <article class="image-card">
                    <img src="${data.urls.small}" alt="${data.alt_description}">
                </article>
            `);
        });
        
        

    } catch (err) {
        console.error('message error', err);
        
    }

    featureSearchInput.value = "";
}


exploreBtn.onclick = onTryFeatureHandler;
window.onscroll = fixedNavOnScroll;