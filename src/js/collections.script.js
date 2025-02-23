import { getDataFromAPI } from "./utils/API.js";

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

document.addEventListener('DOMContentLoaded', () => {
    getTopicsList();
});