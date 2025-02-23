import { getDataFromAPI } from "./utils/API.js";
import { CatchURIParams } from "./utils/CatchURIParams.js";

const listContainer = document.getElementById('topics-container');
const apiUrl = `https://api.unsplash.com/topics?per_page=16&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

async function getTopicsList() {
    try {
        const topicsData = await getDataFromAPI(apiUrl)
        topicsData.forEach(topic => {
            listContainer.insertAdjacentHTML('beforeend', `
                <li id="topic-items" data-id="${topic.id}">${topic.title}</li>
            `);
            
            const topicItems = document.querySelectorAll('#topic-items');
            
        });
    } catch (err) {
        console.error(`error message: ${err}`);
    }
}

async function getCollectionsDetails() {
    const collectionsId = CatchURIParams();
    const collectionsUrl = `https://api.unsplash.com/collections/:${collectionsId}?client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

    try {
        const collectionsData = await getDataFromAPI(collectionsUrl);
        console.log(collectionsData);
        
    } catch (err) {

    }
}

document.addEventListener('DOMContentLoaded', () => {
    getTopicsList();
    getCollectionsDetails();
});