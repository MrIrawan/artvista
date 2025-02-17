import { getDataFromAPI } from './utils/API.js';
import { CatchURIParams } from './utils/CatchURIParams.js';

const paramsId = CatchURIParams();
const apiUrl = `https://api.unsplash.com/photos/${paramsId}?client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
const detailsContainer = document.getElementById('details-container');

async function getPhotoDetails() {
    try {
        const dataResponse = await getDataFromAPI(apiUrl);
    } catch (err) {
        console.error(`error message : ${err}`);
    }
}

document.addEventListener('DOMContentLoaded', () => getPhotoDetails());