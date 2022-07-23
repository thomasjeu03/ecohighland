const loader = document.querySelector('.loader');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener('load', () => {
    sleep(1000).then(() => { loader.classList.add('disparition'); });
});