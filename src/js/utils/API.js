async function getDataFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

export { getDataFromAPI };