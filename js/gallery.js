// Initialize Swiper gallery - with error handling
let gallerySwiper = null;
if (typeof Swiper !== 'undefined') {
    gallerySwiper = new Swiper('.gallerySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
} else {
    console.warn('Swiper library not loaded - gallery will be static');
}

// Gallery item click handlers for potential lightbox functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Placeholder for lightbox or modal functionality
        console.log('Gallery item clicked:', this);
        
        // You can add lightbox functionality here
        // For example, using a library like Fancybox, GLightbox, or custom modal
    });
});

// Pause autoplay on hover - only if Swiper is available
if (gallerySwiper) {
    document.querySelector('.gallerySwiper')?.addEventListener('mouseenter', () => {
        gallerySwiper.autoplay.stop();
    });

    document.querySelector('.gallerySwiper')?.addEventListener('mouseleave', () => {
        gallerySwiper.autoplay.start();
    });
}

// Gallery loading animation
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const galleryItems = entry.target.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 100);
            });
            galleryObserver.unobserve(entry.target);
        }
    });
});

// Initialize gallery items with loading state
document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.95)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Observe gallery container
const galleryContainer = document.querySelector('.gallery-container');
if (galleryContainer) {
    galleryObserver.observe(galleryContainer);
}

console.log('FRAN-PAW Gallery JavaScript Loaded Successfully! 🖼️');