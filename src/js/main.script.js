import { getDataFromAPI } from "./utils/API.js";

const listContainer = document.getElementById('collections-container');
const apiUrl = `https://api.unsplash.com/topics?per_page=20&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;

async function getTopicsList() {
    try {
        const topicsData = await getDataFromAPI(apiUrl)
        topicsData.forEach(topic => {
            listContainer.insertAdjacentHTML('beforeend', `
                <li><a href="#">${topic.title}</a></li>
            `);
        });
    } catch (err) {
        console.error(`error message: ${err}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getTopicsList();
});