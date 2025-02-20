import { getDataFromAPI } from './utils/API.js';
import { CatchURIParams } from './utils/CatchURIParams.js';
import { DateFormatter } from './utils/DateFormatter.js';

const paramsId = CatchURIParams();
const apiUrl = `https://api.unsplash.com/photos/${paramsId}?client_id=xHA1LFvj7tkMQdgmzgfJH7iCn2BXd5BwJYX4TxLaIv4`;
const detailsContainer = document.getElementById('details-container');

async function getPhotoDetails() {
    try {
        const dataResponse = await getDataFromAPI(apiUrl);
        detailsContainer.innerHTML = `
        <div class="header-details">
            <img src="${dataResponse.urls.raw}" alt="${dataResponse.alt_description}">
        </div>
        <div class="body-details">
            <div class="top-description">
                <div class="top-description-item">
                    <span>
                        <p>Views</p>
                        <p>${dataResponse.views}</p>
                    </span>
                    <span>
                        <p>Download</p>
                        <p>${dataResponse.downloads}</p>
                    </span>
                    <span>
                        <p>Featured In</p>
                        <p>hello, world, lorem ipsum</p>
                    </span>
                </div>
                <div class="top-description-item">
                    <a href="#">
                        <span class="material-symbols-sharp">download</span>
                        Download
                    </a>
                </div>
            </div>
            <div class="middle-description">
                <div class="middle-description-item">
                    <article>
                        <span class="material-symbols-sharp">location_on</span>
                        <p>${dataResponse.location.name ? dataResponse.location.name : 'Unknown'}</p>
                    </article>
                    <article>
                        <span class="material-symbols-sharp">photo_camera</span>
                        <p>${dataResponse.exif.name ? dataResponse.exif.name : 'Unknown'}</p>
                    </article>
                    <article>
                        <span class="material-symbols-sharp">calendar_today</span>
                        <p>published on ${DateFormatter(dataResponse.created_at)}</p>
                    </article>
                </div>
                <div class="description-tags">
                    ${dataResponse.tags.map((tag) => `<span>${tag.title}</span>`).join(" ")}
                </div>
            </div>
        </div>
        `
    } catch (err) {
        console.error(`error message : ${err}`);
    }
}

document.addEventListener('DOMContentLoaded', () => getPhotoDetails());