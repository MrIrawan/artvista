function ClickPhotoToDetails(photoElement) {
    photoElement.forEach(item => {
        item.addEventListener('click', () => {
            const photoId = item.getAttribute('data-id');
            window.location.href = `photo.html?id=${photoId}`;
        });
    });
};

export { ClickPhotoToDetails };