function CatchURIParams() {
    const params = new URLSearchParams(window.location.search);
    return params;
}

export { CatchURIParams };