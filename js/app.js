window.addEventListener('scroll',() => {
    const scrollAdvencement = document.querySelector('.scroll_avancement .content');
    const scrolled = window.scrollY;
    const bodyHeight = document.body.clientHeight;
    const windowsHeight = window.innerHeight;

    const valueAdcenvement = scrolled * 100 / (bodyHeight - windowsHeight);

    scrollAdvencement.style.width = 'calc(' + valueAdcenvement + '% + 4px)';
});