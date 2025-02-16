import { getDataFromAPI } from "./utils/API.js";

const photoContainer = document.getElementById('photo-grid');
const apiUrl = `https://api.unsplash.com/photos/?per_page=30&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

async function getPhotoFromAPI(apiUrl) {
    try {
        const photoResponse = await getDataFromAPI(apiUrl)
        .then(data => data.forEach(photo => {
            photoContainer.insertAdjacentHTML('beforeend', `
                <div class="gallery-item" id="photo-item">
                    <img src="${photo.urls.regular}" alt="photo">
                </div>
            `)
            console.log(data);
            
        }));
    } catch (err) {
        console.error(`message error: ${err}`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    getPhotoFromAPI(apiUrl);
});