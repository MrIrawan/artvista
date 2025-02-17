function CatchURIParams() {
    const params = new URLSearchParams(window.location.search).get('id');
    return params;
}

export { CatchURIParams };