document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .fancy-list li, .banca-box');

    animatedElements.forEach((el, index) => {
        el.style.opacity = 0;
        // slight staggering effect based on index for items in the same container naturally
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;

        observer.observe(el);
    });

    // Floating icons dynamic continuous animation randomness
    const floatIcons = document.querySelectorAll('.float-icon');
    floatIcons.forEach((icon) => {
        icon.style.animationDuration = `${4 + Math.random() * 3}s`;
        icon.style.animationDelay = `${Math.random() * 2}s`;
    });
});
