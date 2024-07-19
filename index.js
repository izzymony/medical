const scrollingWrapper = document.querySelector('.scrolling-wrapper');

scrollingWrapper.addEventListener('mouseenter', () => {
    scrollingWrapper.style.animationPlayState = 'paused';
});

scrollingWrapper.addEventListener('mouseleave', () => {
    scrollingWrapper.style.animationPlayState = 'running';
});

