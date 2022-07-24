window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    const valueAdcenvement = scrolled / 100;
    const scrollAdvencement = document.querySelector('.scroll_avancement .content');

    scrollAdvencement.style.width = 'calc(' + valueAdcenvement + '% + 4px)';
});
