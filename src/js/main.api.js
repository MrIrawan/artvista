import { getDataFromAPI } from "./utils/API.js";
import { PhotoDetailsHandler } from "./utils/PhotoDetailsHandler.js";

const photoContainer = document.getElementById('photo-grid');
const headerInput = document.getElementById('search');
const nextPageBtn = document.getElementById('next-page');
const prevPageBtn = document.getElementById('prev-page');
const currentPageContainer = document.getElementById('current-page');
let apiUrl = `https://api.unsplash.com/photos/?per_page=30&page=1&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
let currentPage = 1;
const availablePage = 200;

async function getPhotoFromAPI(apiUrl) {
    try {
        const photoResponse = await getDataFromAPI(apiUrl)
        .then(data => data.forEach(photo => {
            photoContainer.insertAdjacentHTML('beforeend', `
                <figure class="gallery-item" id="photo-item" data-id="${photo.id}">
                    <img src="${photo.urls.regular}" alt="photo ${photo.id}"">
                    <figcaption>${photo.alt_description ? photo.alt_description : 'no description'}</figcaption>
                </figure>
            `)
        }));

        const photoItems = document.querySelectorAll('#photo-item');
        PhotoDetailsHandler(photoItems);

    } catch (err) {
        console.error(`message error: ${err}`);
    }
}

async function handleUserSearch() {
    const userKeyword = encodeURIComponent(headerInput.value);
    const searchApiUrl = `https://api.unsplash.com/search/photos?query=${userKeyword}&per_page=30&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

    try {
        const searchResponse = await getDataFromAPI(searchApiUrl);
        
        searchResponse.results.forEach(res => {
            photoContainer.insertAdjacentHTML('beforeend', `
                <figure class="gallery-item" id="photo-item" data-id="${res.id}">
                    <img src="${res.urls.regular}" alt="photo ${res.id}"">
                    <figcaption>${res.alt_description ? res.alt_description : 'no description'}</figcaption>
                </figure>
            `);
            console.log(res);
            
        })
        
        const photoItems = document.querySelectorAll('#photo-item');
        PhotoDetailsHandler(photoItems);

    } catch(err) {
        console.error(`message error: ${err}`);
    }
}


headerInput.addEventListener('keyup', (e) => {
    if (e.which === 13) {
        photoContainer.innerHTML = '';
        handleUserSearch();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < availablePage) {
            currentPage += 1;
            apiUrl = `https://api.unsplash.com/photos/?per_page=30&page=${currentPage}&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
            photoContainer.innerHTML = '';
            getPhotoFromAPI(apiUrl);
            currentPageContainer.textContent = currentPage;
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage -= 1;
            apiUrl = `https://api.unsplash.com/photos/?per_page=30&page=${currentPage}&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
            photoContainer.innerHTML = '';
            getPhotoFromAPI(apiUrl);
            currentPageContainer.textContent = currentPage;
        }
    })

    if (currentPage === 1) {
        getPhotoFromAPI(apiUrl);
    }
});