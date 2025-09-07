// Initialize AOS (Animate On Scroll) - with error handling
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
} else {
    console.warn('AOS library not loaded - animations will be disabled');
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Handle special cases
        if (href === '#' || href === '#top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // Handle normal anchor links
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to CTA buttons
document.querySelectorAll('.cta-button, .cta-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.href || !this.href.includes('#')) {
            // Add loading animation for external actions
            const originalText = this.textContent;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    once: true
};

const countUp = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCount = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (target === 100 ? '%' : '+');
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target + (target === 100 ? '%' : '+');
        }
    };
    
    updateCount();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector('.number');
            const text = numberElement.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            countUp(numberElement, number);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Add scroll-to-top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show/hide scroll-to-top button based on scroll position
let scrollToTopButton = null;
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (!scrollToTopButton) {
            scrollToTopButton = document.createElement('button');
            scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollToTopButton.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--accent-orange);
                color: white;
                border: none;
                cursor: pointer;
                font-size: 1.2rem;
                z-index: 1000;
                transition: all 0.3s ease;
                box-shadow: var(--shadow-medium);
            `;
            scrollToTopButton.addEventListener('click', scrollToTop);
            scrollToTopButton.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = 'var(--shadow-heavy)';
            });
            scrollToTopButton.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow-medium)';
            });
            document.body.appendChild(scrollToTopButton);
        }
    } else if (scrollToTopButton) {
        scrollToTopButton.remove();
        scrollToTopButton = null;
    }
});

// Add lazy loading for gallery images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('.gallery-item, .about-image img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    imageObserver.observe(img);
});

console.log('FRAN-PAW Main JavaScript Loaded Successfully! 🏗️');