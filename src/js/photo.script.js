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
            <div class="photo-title">
                <h1>${dataResponse.alt_description}</h1>
            </div>
            <div class="photo-description">
                <article class="left-description">
                    <span>
                        <span class="material-symbols-sharp">location_on</span>
                        <p>${dataResponse.location.name ? dataResponse.location.name : 'Unknown'}</p>
                    </span>
                    <span>
                        <span class="material-symbols-sharp">photo_camera</span>
                        <p>${dataResponse.exif.name ? dataResponse.exif.name : 'Unknown'}</p>
                    </span>
                    <span>
                        <span class="material-symbols-sharp">calendar_today</span>
                        <p>Published on ${DateFormatter(dataResponse.created_at)}</p>
                    </span>
                </article>
                <article class="right-description">
                    <div>
                        <div>
                            <span>Downloads</span>
                            <p>${dataResponse.downloads.toLocaleString()}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Views</span>
                            <p>${dataResponse.views.toLocaleString()}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Featured in</span>
                            <p>${dataResponse.related_collections.results.map(collection => collection.title).join(', ')}</p>
                        </div>
                    </div>
                </article>
                <article class="description-tags">
                    ${dataResponse.tags.map(tag => `<span>${tag.title}</span>`).join(' ')}
                </article>
                <article class="download">
                    <button>
                        <span class="material-symbols-sharp">download</span>
                        Download Vista
                    </button>
                </article>
            </div>
        </div>
        `
        console.log(dataResponse);
        
        document.title = `${dataResponse.alt_description} | ArtVista`;
    } catch (err) {
        console.error(`error message : ${err}`);
    }
}

document.addEventListener('DOMContentLoaded', () => getPhotoDetails());