// Max Gym JavaScript - Modern Fitness Theme

document.addEventListener('DOMContentLoaded', function() {
    // Power Mobile menu functionality
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.style.display = 'none';
                mobileToggle.classList.remove('active');
            }
        });
    }
    
    // Power slideshow functionality
    function initPowerSlideshow() {
        const slides = document.querySelectorAll('.power-slide');
        let currentSlide = 0;
        
        if (slides.length === 0) return;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            if (slides[index]) {
                slides[index].classList.add('active');
            }
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Show first slide immediately
        showSlide(0);
        
        // Change slide every 5 seconds for dynamic power feel
        setInterval(nextSlide, 5000);
    }
    
    // Initialize power slideshow
    initPowerSlideshow();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !service) {
                alert('Vul alle verplichte velden in.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Voer een geldig e-mailadres in.');
                return;
            }
            
            // Show success message
            alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                
                // Add staggered animations to child elements
                const children = entry.target.querySelectorAll('.service-item, .service-card, .package-card, .timeline-item, .testimonial-card, .benefit-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fadeInUp');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Enhanced scroll animations
    const enhancedObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const enhancedObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                
                // Add staggered animations to child elements
                const children = entry.target.querySelectorAll('.service-item, .service-card, .package-card, .timeline-item, .testimonial-card, .benefit-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-fadeInUp');
                    }, index * 100);
                });
            }
        });
    }, enhancedObserverOptions);
    
    // Observe all sections for enhanced animations
    document.querySelectorAll('section').forEach(section => {
        enhancedObserver.observe(section);
    });
    
    // Loading state management
    function hideLoadingOverlay() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
    }
    
    // Hide loading overlay when page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideLoadingOverlay);
    } else {
        hideLoadingOverlay();
    }
    
    // Fallback: hide loading overlay after 3 seconds
    setTimeout(hideLoadingOverlay, 3000);
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.slideshow-wrapper');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
     // Power hover effects for strength theme
     function addPowerEffects() {
         const powerElements = document.querySelectorAll('.service-item, .package-card, .timeline-item, .stat-item, .feature-item');
         powerElements.forEach(element => {
             element.addEventListener('mouseenter', function() {
                 this.style.transform = 'translateY(-8px) scale(1.02)';
                 this.style.boxShadow = '0 12px 40px rgba(44, 90, 160, 0.25)';
                 this.style.borderColor = 'var(--accent-color)';
             });
             
             element.addEventListener('mouseleave', function() {
                 this.style.transform = 'translateY(0) scale(1)';
                 this.style.boxShadow = '0 8px 32px rgba(44, 90, 160, 0.15)';
                 this.style.borderColor = '';
             });
         });
     }
     
     // Initialize power effects
     addPowerEffects();
    
    // Counter animation for statistics (if needed)
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current).toLocaleString();
            }, 16);
        });
    }
    
    // Initialize counter animation when in viewport
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    const counterSection = document.querySelector('#review-counter');
    if (counterSection) {
        counterObserver.observe(counterSection);
    }
    
    // Testimonials carousel functionality
    function initTestimonialsCarousel() {
        const carousel = document.getElementById('testimonials-carousel');
        if (!carousel) return;
        
        let isDragging = false;
        let startX;
        let scrollLeft;
        
        // Mouse events
        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            carousel.classList.add('dragging');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        });
        
        carousel.addEventListener('mouseup', () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events
        carousel.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
        
        // Carousel navigation arrows
        const leftArrow = document.getElementById('testimonial-arrow-left');
        const rightArrow = document.getElementById('testimonial-arrow-right');
        
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                carousel.scrollBy({ left: -carousel.offsetWidth * 0.8, behavior: 'smooth' });
            });
        }
        
        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                carousel.scrollBy({ left: carousel.offsetWidth * 0.8, behavior: 'smooth' });
            });
        }
    }
    
    // Initialize testimonials carousel
    initTestimonialsCarousel();
    
    
     // Power gym specific animations
     function addPowerAnimations() {
         // Add power pulsing effect to CTA buttons
         const ctaButtons = document.querySelectorAll('.power-button, .power-cta-primary, .cta-button');
         ctaButtons.forEach(button => {
             button.addEventListener('mouseenter', function() {
                 this.style.animation = 'powerPulse 1s ease-in-out infinite';
             });
             
             button.addEventListener('mouseleave', function() {
                 this.style.animation = 'none';
             });
         });
         
         // Add power glow effect to package cards on hover
         const packageCards = document.querySelectorAll('.package-card');
         packageCards.forEach(card => {
             card.addEventListener('mouseenter', function() {
                 this.style.animation = 'powerGlow 2s ease-in-out infinite';
             });
             
             card.addEventListener('mouseleave', function() {
                 this.style.animation = 'none';
             });
         });
         
         // Add strength bounce to feature items
         const featureItems = document.querySelectorAll('.feature-item');
         featureItems.forEach(item => {
             item.addEventListener('mouseenter', function() {
                 this.style.animation = 'strengthBounce 0.6s ease-in-out';
             });
         });
     }
     
     // Initialize power animations
     addPowerAnimations();
    
    // Performance optimization: Lazy load images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Add loading states for better UX
    function addLoadingStates() {
        const buttons = document.querySelectorAll('button, .cta-button, .service-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (this.type === 'submit') {
                    this.style.opacity = '0.7';
                    this.style.pointerEvents = 'none';
                    
                    setTimeout(() => {
                        this.style.opacity = '1';
                        this.style.pointerEvents = 'auto';
                    }, 2000);
                }
            });
        });
    }
    
    // Initialize loading states
    addLoadingStates();
    
     // Power gym theme: Add dynamic effects
     function addPowerThemeEffects() {
         const powerTexts = [
             "MAX GYM ZOETERMEER",
             "STRENGTH & POWER",
             "POWERLIFTING",
             "FITNESS DOMINATION"
         ];
         
         // Add dynamic text shadow effects to hero section
         const heroTitle = document.querySelector('.power-title');
         if (heroTitle) {
             setInterval(() => {
                 const randomText = powerTexts[Math.floor(Math.random() * powerTexts.length)];
                 heroTitle.style.textShadow = `3px 3px 6px rgba(0, 0, 0, 0.5), 0 0 30px rgba(30, 58, 138, 0.4)`;
                 
                 setTimeout(() => {
                     heroTitle.style.textShadow = '3px 3px 6px rgba(0, 0, 0, 0.5)';
                 }, 1500);
             }, 12000);
         }
         
         // Add subtle power effects to buttons
         const powerButtons = document.querySelectorAll('.power-button, .power-cta-primary');
         powerButtons.forEach(button => {
             setInterval(() => {
                 button.style.transform = 'scale(1.02)';
                 setTimeout(() => {
                     button.style.transform = '';
                 }, 300);
             }, 10000);
         });
     }
     
     // Initialize power theme effects
     addPowerThemeEffects();
    
    // Console message for developers
    console.log('%c💪 MAX GYM ZOETERMEER 💪', 'color: #6c1dff; font-size: 20px; font-weight: bold;');
    console.log('%cModern Fitness Theme - Excellence in Motion', 'color: #4c14b8; font-size: 14px;');
    console.log('%cWhere fitness meets innovation', 'color: #7f8c8d; font-size: 12px;');
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for potential use in other scripts
window.MaxGym = {
    debounce,
    throttle,
    initBackgroundSlideshow: function() {
        // Re-export for external use
        return this.initBackgroundSlideshow;
    }
};
