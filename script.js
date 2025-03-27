// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial state of portfolio cards
    gsap.set('.portfolio-card', {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 0
    });

    // Create timeline for portfolio animations
    const portfolioTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    });

    // Animate first portfolio card
    portfolioTimeline.to('#portfolio1', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 360,
        duration: 1.5,
        ease: 'power2.out'
    })
    .to('#portfolio1', {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 0,
        duration: 1,
        ease: 'power2.in'
    });

    // Animate second portfolio card
    portfolioTimeline.to('#portfolio2', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 360,
        duration: 1.5,
        ease: 'power2.out'
    })
    .to('#portfolio2', {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 0,
        duration: 1,
        ease: 'power2.in'
    });

    // Animate third portfolio card
    portfolioTimeline.to('#portfolio3', {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 360,
        duration: 1.5,
        ease: 'power2.out'
    })
    .to('#portfolio3', {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 0,
        duration: 1,
        ease: 'power2.in'
    });

    // Smooth scroll for navigation links using GSAP
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Add hover effect to portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        gsap.to('.hero-section', {
            backgroundPositionY: scrolled * 0.5,
            duration: 0.1
        });
    });

    // Add loading animation
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-section h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });

    gsap.from('.hero-section p', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    });
}); 