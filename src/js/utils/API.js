async function getDataFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

export { getDataFromAPI };