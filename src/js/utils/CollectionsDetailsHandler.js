function CollectionsDetailsHandler(element) {
    element.forEach(item => {
        item.addEventListener('click', () => {
            const collectionId = item.getAttribute('data-id');
            window.location.href = `collections.html?id=${collectionId}`;
        });
    });
}

export { CollectionsDetailsHandler };