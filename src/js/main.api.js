import { getDataFromAPI } from "./utils/API.js";

const photoContainer = document.getElementById('photo-grid');
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


document.addEventListener('DOMContentLoaded', () => {
    getPhotoFromAPI(apiUrl);
});