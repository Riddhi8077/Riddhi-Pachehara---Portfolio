document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');

    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        hero.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
    });
});