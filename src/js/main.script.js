import { getDataFromAPI } from "./utils/API.js";

const listContainer = document.getElementById('topics-container');
const apiUrl = `https://api.unsplash.com/topics?per_page=16&client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
const artVistaTitle = document.getElementById('artvista-title');

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

function scrollTopicsList() {
    const nextScrollToggle = document.getElementById('right');
    const prevScrollToggle = document.getElementById('left');

    nextScrollToggle.onclick = () => listContainer.scrollBy({ left: 200, behavior: 'smooth' });
    prevScrollToggle.onclick = () => listContainer.scrollBy({ left: -200, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    getTopicsList();
    scrollTopicsList();
    artVistaTitle.onclick = () => window.location.href = 'index.html';
});