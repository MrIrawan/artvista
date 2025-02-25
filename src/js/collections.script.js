import { getDataFromAPI } from "./utils/API.js";
import { CatchURIParams } from "./utils/CatchURIParams.js";
import { CollectionsDetailsHandler } from "./utils/CollectionsDetailsHandler.js";
import { DateFormatter } from "./utils/DateFormatter.js";

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
                            <p>up to ${collectionsData.total_photos} photo's</p>
                        </span>
                    </div>
                </div>
                <div class="header-image">
                    <img src="${collectionsData.cover_photo.urls.regular}" alt="image ${collectionsData.id}">
                </div>
            </div>
            <div class="collections-body"></div>
        `;
        console.log(collectionsData);
        
    } catch (err) {

    }
}

document.addEventListener('DOMContentLoaded', () => {
    getTopicsList();
    getCollectionsDetails();
    artVistaTitle.onclick = () => window.location.href = 'main.html';
});