function hideLoading() {
   setTimeout(() => {
    document.querySelector('.loader-wrapper').classList.add('hidden');
   }, 3000);
}

function showLoading() {
    setTimeout(() => {
        document.querySelector('.gallery-page-option').classList.remove('hidden');
    }, 3000);
    document.querySelector('.loader-wrapper').classList.remove('hidden');
}

export { showLoading, hideLoading };