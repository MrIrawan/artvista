import { getDataFromAPI } from "./utils/API.js";
import { CatchURIParams } from "./utils/CatchURIParams.js";
import { CollectionsDetailsHandler } from "./utils/CollectionsDetailsHandler.js";
import { DateFormatter } from "./utils/DateFormatter.js";
import { PhotoDetailsHandler } from "./utils/PhotoDetailsHandler.js";

const listContainer = document.getElementById('topics-container');
const apiUrl = `https://api.unsplash.com/topics?per_page=16&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
const artVistaTitle = document.getElementById('artvista-title');
const collectionsContainer = document.getElementById('collections-container');

async function getTopicsList() {
    try {
        const topicsData = await getDataFromAPI(apiUrl)
        topicsData.forEach(topic => {
            listContainer.insertAdjacentHTML('beforeend', `
                <li id="topic-items" data-id="${topic.id}">${topic.title}</li>
            `);
            
            const topicItems = document.querySelectorAll('#topic-items');
            CollectionsDetailsHandler(topicItems);
            
        });
    } catch (err) {
        console.error(`error message: ${err}`);
    }
}

async function getCollectionsDetails() {
    const collectionsId = CatchURIParams();
    const collectionsUrl = `https://api.unsplash.com/topics/${collectionsId}?client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

    try {
        const collectionsData = await getDataFromAPI(collectionsUrl);
        const relatedPhotos = await getRelatedPhotos(collectionsId);

        collectionsContainer.innerHTML = `
            <div class="collections-header">
                <div class="header-description">
                    <h2>${collectionsData.title}</h2>
                    <p>${collectionsData.description}</p>
                    <div class="other-description">
                        <span id="description-wrapper">
                            <span class="material-symbols-sharp">calendar_today</span>
                            <p>published at ${DateFormatter(collectionsData.published_at)}</p>
                        </span>
                        <hr>
                        <span id="description-wrapper">
                            <span class="material-symbols-sharp">image</span>
                            <p>up to ${collectionsData.total_photos.toLocaleString()} photo's</p>
                        </span>
                    </div>
                </div>
                <div class="header-image">
                    <figure>
                    <img src="${collectionsData.cover_photo.urls.regular}" alt="image ${collectionsData.id}" id="collections-image">
                        <figcaption id="image-title">
                            ${collectionsData.cover_photo.alt_description}
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="collections-body" id="collections-body">
                
            </div>
        `;

        const collectionsBody = document.getElementById('collections-body');
        relatedPhotos.forEach(photo => {
            collectionsBody.insertAdjacentHTML('beforeend', `
                <figure id="collections-item" data-id="${photo.id}">
                    <img src="${photo.urls.regular}" alt="image ${photo.id}">
                    <figcaption>${photo.alt_description ? photo.alt_description : 'No description'}</figcaption>
                </figure>
            `);
        });

        const collectionsItems = document.querySelectorAll('#collections-item');
        PhotoDetailsHandler(collectionsItems);
    } catch (err) {
        console.error(`error message: ${err}`);
    }
}

async function getRelatedPhotos(collectionsId) {
    const relatedPhotosUrl = `https://api.unsplash.com/topics/${collectionsId}/photos?per_page=30&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
    const photoResponse = await getDataFromAPI(relatedPhotosUrl);

    return photoResponse;
}

document.addEventListener('DOMContentLoaded', () => {
    getTopicsList();
    getCollectionsDetails();
    artVistaTitle.onclick = () => window.location.href = 'main.html';
});