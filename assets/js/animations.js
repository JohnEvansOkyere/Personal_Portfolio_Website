// ==========================================================================
// Animation System
// Author: Alex Chen
// Description: Advanced animations and visual effects for portfolio
// ==========================================================================

// ==========================================================================
// Animation Utilities
// ==========================================================================
class AnimationUtils {
    static easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    static easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    
    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
}

// ==========================================================================
// Preloader Animation
// ==========================================================================
class PreloaderAnimation {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.init();
    }
    
    init() {
        if (!this.preloader) return;
        
        this.createLoader();
        this.startAnimation();
    }
    
    createLoader() {
        const loader = this.preloader.querySelector('.loader');
        if (!loader) return;
        
        // Create animated loader
        loader.innerHTML = `
            <div class="loader-container">
                <div class="loader-circle"></div>
                <div class="loader-text">Loading...</div>
            </div>
        `;
        
        // Add CSS for loader
        const style = document.createElement('style');
        style.textContent = `
            .loader-container {
                text-align: center;
            }
            .loader-circle {
                width: 60px;
                height: 60px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid #0ea5e9;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            .loader-text {
                color: #0ea5e9;
                font-weight: 600;
                font-size: 16px;
                animation: pulse 2s ease-in-out infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    }
    
    startAnimation() {
        // Hide preloader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hidePreloader();
            }, 800);
        });
    }
    
    hidePreloader() {
        this.preloader.style.opacity = '0';
        setTimeout(() => {
            this.preloader.style.display = 'none';
        }, 500);
    }
}

// ==========================================================================
// Typing Animation
// ==========================================================================
class TypingAnimation {
    constructor(elementId, texts, options = {}) {
        this.element = document.getElementById(elementId);
        this.texts = texts;
        this.options = {
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            ...optio
        };
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.init();
    }
    
    init() {
        if (!this.element || !this.texts.length) return;
        
        if (this.options.showCursor) {
            this.createCursor();
        }
        
        setTimeout(() => {
            this.type();
        }, this.options.startDelay);
    }
    
    createCursor() {
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = this.options.cursorChar;
        cursor.style.animation = 'blink 1s infinite';
        
        // Add cursor CSS
        const style = document.createElement('style');
        style.textContent = `
            .typing-cursor {
                color: #0ea5e9;
                font-weight: 400;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        if (!document.querySelector('#typing-cursor-style')) {
            style.id = 'typing-cursor-style';
            document.head.appendChild(style);
        }
        
        this.element.appendChild(cursor);
        this.cursor = cursor;
    }
    
    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }
        
        // Re-add cursor
        if (this.cursor) {
            this.element.appendChild(this.cursor);
        }
        
        let typeSpeed = this.isDeleting ? this.options.backSpeed : this.options.typeSpeed;
        
        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            typeSpeed = this.options.backDelay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// ==========================================================================
// Scroll Animations
// ==========================================================================
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.initScrollAnimations();
        this.initParallaxElements();
    }
    
    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    }
    
    initScrollAnimations() {
        // Fade in up animations
        const fadeInUpElements = document.querySelectorAll('.fade-in-up');
        fadeInUpElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
        
        // Fade in left animations
        const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
        fadeInLeftElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(-30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
        
        // Fade in right animations
        const fadeInRightElements = document.querySelectorAll('.fade-in-right');
        fadeInRightElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
        
        // Scale in animations
        const scaleInElements = document.querySelectorAll('.scale-in');
        scaleInElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.8)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }
    
    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) translateX(0) scale(1)';
        
        // Add stagger effect for child elements
        const children = element.querySelectorAll('.stagger-child');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    initParallaxElements() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// ==========================================================================
// Navbar Scroll Effects
// ==========================================================================
class NavbarAnimation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.lastScrollTop = 0;
        this.init();
    }
    
    init() {
        if (!this.navbar) return;
        
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background on scroll
        if (scrollTop > 100) {
            this.navbar.classList.add('scrolled');
            this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            this.navbar.style.backdropFilter = 'blur(10px)';
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            this.navbar.classList.remove('scrolled');
            this.navbar.style.backgroundColor = 'transparent';
            this.navbar.style.backdropFilter = 'none';
            this.navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > this.lastScrollTop && scrollTop > 200) {
            // Scrolling down
            this.navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            this.navbar.style.transform = 'translateY(0)';
        }
        
        this.lastScrollTop = scrollTop;
    }
}

// ==========================================================================
// Particle System
// ==========================================================================
class ParticleSystem {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.options = {
            particleCount: 50,
            particleSize: 2,
            particleSpeed: 0.5,
            particleColor: 'rgba(14, 165, 233, 0.6)',
            connectionDistance: 150,
            connectionOpacity: 0.2,
            ...options
        };
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.createCanvas();
        this.createParticles();
        this.animate();
        this.handleResize();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        
        this.container.style.position = 'relative';
        this.container.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
    }
    
    resizeCanvas() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    createParticles() {
        for (let i = 0; i < this.options.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.options.particleSpeed,
                vy: (Math.random() - 0.5) * this.options.particleSpeed,
                size: Math.random() * this.options.particleSize + 1
            });
        }
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
        });
    }
    
    drawParticles() {
        this.ctx.fillStyle = this.options.particleColor;
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    drawConnections() {
        this.particles.forEach((particle, i) => {
            for (let j = i + 1; j < this.particles.length; j++) {
                const other = this.particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.options.connectionDistance) {
                    const opacity = this.options.connectionOpacity * (1 - distance / this.options.connectionDistance);
                    this.ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            }
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    }
}

// ==========================================================================
// Floating Elements Animation
// ==========================================================================
class FloatingAnimation {
    constructor() {
        this.elements = document.querySelectorAll('.float');
        this.init();
    }
    
    init() {
        this.elements.forEach((element, index) => {
            this.animateElement(element, index);
        });
    }
    
    animateElement(element, index) {
        const duration = AnimationUtils.randomBetween(3000, 6000);
        const delay = index * 200;
        const amplitude = AnimationUtils.randomBetween(10, 30);
        
        element.style.animation = `float ${duration}ms ease-in-out infinite`;
        element.style.animationDelay = `${delay}ms`;
        
        // Add custom CSS for floating
        if (!document.querySelector('#float-keyframes')) {
            const style = document.createElement('style');
            style.id = 'float-keyframes';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-${amplitude}px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ==========================================================================
// Mouse Movement Effects
// ==========================================================================
class MouseEffects {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }
    
    init() {
        this.trackMouse();
        this.initMouseFollower();
        this.initTiltEffect();
        this.initMagneticEffect();
    }
    
    trackMouse() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }
    
    initMouseFollower() {
        const follower = document.createElement('div');
        follower.className = 'mouse-follower';
        follower.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: multiply;
            transition: transform 0.3s ease;
        `;
        document.body.appendChild(follower);
        
        let targetX = 0;
        let targetY = 0;
        
        const updateFollower = () => {
            targetX += (this.mouseX - targetX) * 0.1;
            targetY += (this.mouseY - targetY) * 0.1;
            
            follower.style.left = targetX - 10 + 'px';
            follower.style.top = targetY - 10 + 'px';
            
            requestAnimationFrame(updateFollower);
        };
        
        updateFollower();
    }
    
    initTiltEffect() {
        const tiltElements = document.querySelectorAll('.tilt-effect');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -10;
                const rotateY = (x - centerX) / centerX * 10;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });
    }
    
    initMagneticEffect() {
        const magneticElements = document.querySelectorAll('.magnetic');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// ==========================================================================
// Text Animation Effects
// ==========================================================================
class TextAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.initSplitTextAnimation();
        this.initGlowEffect();
        this.initWaveEffect();
    }
    
    initSplitTextAnimation() {
        const splitTextElements = document.querySelectorAll('.split-text');
        
        splitTextElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.transition = `all 0.5s ease ${index * 50}ms`;
                element.appendChild(span);
            });
            
            // Animate when in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const spans = entry.target.querySelectorAll('span');
                        spans.forEach(span => {
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0)';
                        });
                    }
                });
            });
            
            observer.observe(element);
        });
    }
    
    initGlowEffect() {
        const glowElements = document.querySelectorAll('.text-glow');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.textShadow = '0 0 20px rgba(14, 165, 233, 0.8)';
                element.style.transition = 'text-shadow 0.3s ease';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.textShadow = 'none';
            });
        });
    }
    
    initWaveEffect() {
        const waveElements = document.querySelectorAll('.wave-text');
        
        waveElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.animation = `wave 2s ease-in-out infinite ${index * 100}ms`;
                element.appendChild(span);
            });
        });
        
        // Add wave animation CSS
        if (!document.querySelector('#wave-keyframes')) {
            const style = document.createElement('style');
            style.id = 'wave-keyframes';
            style.textContent = `
                @keyframes wave {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ==========================================================================
// Smooth Scroll
// ==========================================================================
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ==========================================================================
// Loading Progress Animation
// ==========================================================================
class LoadingProgress {
    constructor() {
        this.progress = 0;
        this.init();
    }
    
    init() {
        this.createProgressBar();
        this.simulateLoading();
    }
    
    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.id = 'loading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #0ea5e9, #d946ef);
            z-index: 10000;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    simulateLoading() {
        const progressBar = document.getElementById('loading-progress');
        const interval = setInterval(() => {
            this.progress += Math.random() * 15;
            
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    progressBar.style.opacity = '0';
                    setTimeout(() => {
                        progressBar.remove();
                    }, 300);
                }, 500);
            }
            
            progressBar.style.width = this.progress + '%';
        }, 200);
    }
}

// ==========================================================================
// Initialize All Animations
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Core animations
    new PreloaderAnimation();
    new ScrollAnimations();
    new NavbarAnimation();
    new SmoothScroll();
    new LoadingProgress();
    
    // Interactive effects
    new MouseEffects();
    new FloatingAnimation();
    new TextAnimations();
    
    // Initialize typing animation for hero section
    const typingTexts = [
        'Data Scientist',
        'ML Engineer',
        'AI Developer',
        'Chatbot Developer',
        'Problem Solver'
    ];
    new TypingAnimation('typing-text', typingTexts);
    
    // Initialize particle system for hero section
    new ParticleSystem('home', {
        particleCount: 30,
        particleSize: 1.5,
        particleSpeed: 0.3,
        connectionDistance: 120
    });
    
    // Add scroll-triggered animations with stagger
    const observeElements = (selector, delay = 100) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * delay}ms`;
        });
    };
    
    observeElements('.skill-category', 150);
    observeElements('.project-card', 200);
    observeElements('.stat-card', 100);
    
    // Add hover effects for interactive elements
    const addHoverEffects = () => {
        const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'none';
            });
        });
        
        const cards = document.querySelectorAll('.project-card, .skill-category, .stat-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            });
        });
    };
    
    addHoverEffects();
});

// ==========================================================================
// Performance Optimization
// ==========================================================================
const optimizeAnimations = () => {
    // Reduce animations on low-end devices
    const isLowEnd = navigator.hardwareConcurrency < 4 || navigator.connection?.effectiveType === 'slow-2g';
    
    if (isLowEnd) {
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
        document.querySelectorAll('.parallax').forEach(el => {
            el.style.transform = 'none';
        });
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        const isHidden = document.hidden;
        document.querySelectorAll('*').forEach(el => {
            if (isHidden) {
                el.style.animationPlayState = 'paused';
            } else {
                el.style.animationPlayState = 'running';
            }
        });
    });
};

// Apply optimizations
optimizeAnimations();