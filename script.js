const burger = document.getElementById('burger');
const menu = document.getElementById('nav-menu');
const navLinks = menu.querySelectorAll('a');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});

function startCount(counter) {
    const target = parseInt(counter.textContent.replace(/\D/g, ''), 10);
    let count = 0;
    const duration = 1000;
    const stepTime = duration / target;

    const timer = setInterval(() => {
        count += 1;
        counter.textContent = count + '+';
        if (count >= target) {
            clearInterval(timer);
            counter.textContent = target + '+';
        }
    }, stepTime);
}

window.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.big-num');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, io) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCount(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, observerOptions);
    counters.forEach(counter => observer.observe(counter));
});


