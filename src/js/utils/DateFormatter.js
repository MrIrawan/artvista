function DateFormatter(strDate) {
    const date = new Date(strDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export { DateFormatter };