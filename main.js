// Kod dla efektu Mouse Trail
const mouseTrail = document.querySelector('.mouse-trail');
let isHovering = false;

document.addEventListener('mousemove', (e) => {
    if (!isHovering) {
        mouseTrail.style.opacity = '1';
        mouseTrail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

document.addEventListener('mouseleave', () => {
    mouseTrail.style.opacity = '0';
});
