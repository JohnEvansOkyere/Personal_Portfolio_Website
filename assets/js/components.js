// ==========================================================================
// Component Functionality
// Author: Alex Chen
// Description: Individual component handlers and utilities
// ==========================================================================

// ==========================================================================
// Modal Component
// ==========================================================================
class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.overlay = null;
        this.isOpen = false;
        this.init();
    }
    
    init() {
        if (!this.modal) return;
        
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 hidden';
        this.overlay.style.backdropFilter = 'blur(5px)';
        document.body.appendChild(this.overlay);
        
        // Close on overlay click
        this.overlay.addEventListener('click', () => this.close());
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    open() {
        if (!this.modal || this.isOpen) return;
        
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        
        // Show overlay
        this.overlay.classList.remove('hidden');
        this.overlay.classList.add('modal-fade');
        
        // Show modal with animation
        this.modal.classList.remove('hidden');
        this.modal.classList.add('modal-scale', 'show');
        
        // Focus first focusable element
        const focusableElement = this.modal.querySelector('input, button, textarea, select');
        if (focusableElement) {
            focusableElement.focus();
        }
    }
    
    close() {
        if (!this.modal || !this.isOpen) return;
        
        this.isOpen = false;
        document.body.style.overflow = '';
        
        // Hide modal with animation
        this.modal.classList.remove('show');
        this.overlay.classList.remove('modal-fade');
        
        setTimeout(() => {
            this.modal.classList.add('hidden');
            this.overlay.classList.add('hidden');
        }, 300);
    }
}

// ==========================================================================
// Carousel Component
// ==========================================================================
class Carousel {
    constructor(carouselId, options = {}) {
        this.carousel = document.getElementById(carouselId);
        this.slides = [];
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.options = {
            autoPlay: true,
            interval: 5000,
            showIndicators: true,
            showControls: true,
            ...options
        };
        this.init();
    }
    
    init() {
        if (!this.carousel) return;
        
        this.slides = this.carousel.querySelectorAll('.carousel-slide');
        if (this.slides.length === 0) return;
        
        this.createControls();
        this.createIndicators();
        this.showSlide(0);
        
        if (this.options.autoPlay) {
            this.startAutoPlay();
        }
    }
    
    createControls() {
        if (!this.options.showControls) return;
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prevSlide());
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.carousel.appendChild(prevBtn);
        this.carousel.appendChild(nextBtn);
    }
    
    createIndicators() {
        if (!this.options.showIndicators) return;
        
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2';
        
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all';
            indicator.addEventListener('click', () => this.showSlide(index));
            indicators.appendChild(indicator);
        });
        
        this.carousel.appendChild(indicators);
        this.indicators = indicators.querySelectorAll('button');
    }
    
    showSlide(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(20px)';
        });
        
        // Show current slide
        const currentSlide = this.slides[index];
        currentSlide.classList.add('active');
        setTimeout(() => {
            currentSlide.style.opacity = '1';
            currentSlide.style.transform = 'translateX(0)';
        }, 50);
        
        // Update indicators
        if (this.indicators) {
            this.indicators.forEach((indicator, i) => {
                indicator.classList.toggle('bg-opacity-100', i === index);
                indicator.classList.toggle('bg-opacity-50', i !== index);
            });
        }
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.options.interval);
        
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
        });
        
        // Resume on mouse leave
        this.carousel.addEventListener('mouseleave', () => {
            if (this.options.autoPlay) {
                this.startAutoPlay();
            }
        });
    }
    
    stop() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// ==========================================================================
// Project Filter Component
// ==========================================================================
class ProjectFilter {
    constructor(filterContainer, projectGrid) {
        this.filterContainer = document.querySelector(filterContainer);
        this.projectGrid = document.querySelector(projectGrid);
        this.filterButtons = [];
        this.projects = [];
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        if (!this.filterContainer || !this.projectGrid) return;
        
        this.filterButtons = this.filterContainer.querySelectorAll('.filter-btn');
        this.projects = this.projectGrid.querySelectorAll('.project-card');
        
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterProjects(filter);
                this.updateActiveButton(e.target);
            });
        });
    }
    
    filterProjects(filter) {
        this.currentFilter = filter;
        
        this.projects.forEach(project => {
            const categories = project.dataset.categories ? project.dataset.categories.split(',') : [];
            const shouldShow = filter === 'all' || categories.includes(filter);
            
            if (shouldShow) {
                project.style.display = 'block';
                project.classList.add('fade-in-up');
            } else {
                project.style.display = 'none';
                project.classList.remove('fade-in-up');
            }
        });
        
        // Re-trigger animations for visible projects
        setTimeout(() => {
            this.projects.forEach(project => {
                if (project.style.display !== 'none') {
                    project.classList.add('animate');
                }
            });
        }, 100);
    }
    
    updateActiveButton(activeBtn) {
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
}

// ==========================================================================
// Skill Progress Bars Component
// ==========================================================================
class SkillBars {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.isAnimated = false;
        this.init();
    }
    
    init() {
        if (this.skillBars.length === 0) return;
        
        this.observeSkillSection();
    }
    
    observeSkillSection() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimated) {
                    this.animateSkillBars();
                    this.isAnimated = true;
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }
    
    animateSkillBars() {
        this.skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.dataset.width || '0%';
                bar.style.width = width;
                bar.style.transition = 'width 1.5s ease-out';
                
                // Add glow effect
                bar.classList.add('skill-glow');
                
                // Remove glow after animation
                setTimeout(() => {
                    bar.classList.remove('skill-glow');
                }, 1500);
            }, index * 200);
        });
    }
}

// ==========================================================================
// Counter Animation Component
// ==========================================================================
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number[data-count]');
        this.isAnimated = false;
        this.init();
    }
    
    init() {
        if (this.counters.length === 0) return;
        
        this.observeAboutSection();
    }
    
    observeAboutSection() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimated) {
                    this.animateCounters();
                    this.isAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);
    }
    
    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

// ==========================================================================
// Form Validation Component
// ==========================================================================
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }
    
    validateForm() {
        this.errors = {};
        const formData = new FormData(this.form);
        
        // Validate required fields
        const requiredFields = this.form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.addError(field.name, 'This field is required');
            }
        });
        
        // Validate email
        const emailField = this.form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            if (!this.isValidEmail(emailField.value)) {
                this.addError(emailField.name, 'Please enter a valid email address');
            }
        }
        
        // Display errors or submit
        if (Object.keys(this.errors).length === 0) {
            this.submitForm(formData);
        } else {
            this.displayErrors();
        }
    }
    
    validateField(field) {
        this.clearFieldError(field);
        
        if (field.hasAttribute('required') && !field.value.trim()) {
            this.addError(field.name, 'This field is required');
            this.displayFieldError(field);
        }
        
        if (field.type === 'email' && field.value && !this.isValidEmail(field.value)) {
            this.addError(field.name, 'Please enter a valid email address');
            this.displayFieldError(field);
        }
    }
    
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    addError(fieldName, message) {
        this.errors[fieldName] = message;
    }
    
    displayErrors() {
        Object.keys(this.errors).forEach(fieldName => {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                this.displayFieldError(field);
            }
        });
    }
    
    displayFieldError(field) {
        this.clearFieldError(field);
        
        const error = this.errors[field.name];
        if (!error) return;
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error text-red-500 text-sm mt-1';
        errorElement.textContent = error;
        
        field.parentNode.appendChild(errorElement);
        field.classList.add('border-red-500', 'focus:border-red-500');
    }
    
    clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.classList.remove('border-red-500', 'focus:border-red-500');
    }
    
    submitForm(formData) {
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Reset form
            this.form.reset();
            
            // Show success message
            this.showSuccessMessage();
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    }
    
    showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
        successMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Thank you! Your message has been sent successfully.';
        
        this.form.parentNode.insertBefore(successMessage, this.form);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

// ==========================================================================
// Mobile Menu Component
// ==========================================================================
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobile-menu-btn');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.isOpen = false;
        this.init();
    }
    
    init() {
        if (!this.menuBtn || !this.mobileMenu) return;
        
        this.menuBtn.addEventListener('click', () => {
            this.toggle();
        });
        
        // Close menu when clicking on links
        const menuLinks = this.mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.mobileMenu.contains(e.target) && !this.menuBtn.contains(e.target)) {
                this.close();
            }
        });
    }
    
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.isOpen = true;
        this.mobileMenu.classList.remove('hidden');
        this.menuBtn.querySelector('i').classList.replace('fa-bars', 'fa-times');
        
        // Animate menu items
        const menuItems = this.mobileMenu.querySelectorAll('a');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    close() {
        this.isOpen = false;
        this.mobileMenu.classList.add('hidden');
        this.menuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        
        // Reset menu items
        const menuItems = this.mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
        });
    }
}

// ==========================================================================
// Initialize Components
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ProjectFilter('.project-filters', '#projects-grid');
    new SkillBars();
    new CounterAnimation();
    new FormValidator('contact-form');
    new MobileMenu();
    
    // Initialize any modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        new Modal(modal.id);
    });
    
    // Initialize any carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new Carousel(carousel.id);
    });
});

// ==========================================================================
// Export for module usage (if needed)
// ==========================================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Modal,
        Carousel,
        ProjectFilter,
        SkillBars,
        CounterAnimation,
        FormValidator,
        MobileMenu
    };
}