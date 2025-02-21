import { getDataFromAPI } from "./utils/API.js";

const photoContainer = document.getElementById('photo-grid');
const headerInput = document.getElementById('search');
const apiUrl = `https://api.unsplash.com/photos/?per_page=30&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

async function getPhotoFromAPI(apiUrl) {
    try {
        const photoResponse = await getDataFromAPI(apiUrl)
        .then(data => data.forEach(photo => {
            photoContainer.insertAdjacentHTML('beforeend', `
                <div class="gallery-item" id="photo-item" data-id="${photo.id}">
                    <img src="${photo.urls.regular}" alt="photo">
                </div>
            `)
        }));

        const photoItems = document.querySelectorAll('#photo-item');
        photoItems.forEach(item => {
            item.addEventListener('click', () => {
                const photoId = item.getAttribute('data-id');
                window.location.href = `photo.html?id=${photoId}`
            })
        })
        
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
                <div class="gallery-item" id="photo-item" data-id="${res.id}">
                    <img src="${res.urls.regular}" alt="photo">
                </div>
            `);
        })
        
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
    getPhotoFromAPI(apiUrl);
});