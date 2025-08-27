document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializePreloader();
    initializeNavigation();
    initializeTypingAnimation();
    initializeScrollAnimations();
    // Remove initializeCounters() - handled by components.js
    initializeSkillBars();
    initializeProjects();
    initializeTimeline();
    initializeContactForm();
    initializeParallax();
    initializeSmoothScroll();
    
    // Remove preloader after initialization
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 500);
        }
    }, 1500);
});

// Keep all your other functions as they are...
// Just remove the initializeCounters function since components.js handles it

// ==========================================================================
// Preloader
// ==========================================================================
function initializePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    // Add loading progress if needed
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            clearInterval(interval);
            progress = 100;
        }
    }, 100);
}

// ==========================================================================
// Navigation
// ==========================================================================
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    
    if (!navbar) return;
    
    // Navbar scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle - Let components.js handle this
    // Remove duplicate mobile menu code
    
    // Active nav link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionId) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
}

// ==========================================================================
// Typing Animation
// ==========================================================================
function initializeTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement || !window.typingTexts) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = animationConfig?.typingSpeed || 100;
    let deletingSpeed = 50;
    let pauseDelay = animationConfig?.typingDelay || 2000;
    
    function typeText() {
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                setTimeout(typeText, 500);
                return;
            }
            setTimeout(typeText, deletingSpeed);
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, pauseDelay);
                return;
            }
            setTimeout(typeText, typingSpeed);
        }
    }
    
    // Start typing animation
    typeText();
}

// ==========================================================================
// Scroll Animations
// ==========================================================================
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ==========================================================================
// Skill Bars Animation - Keep this since components.js has different logic
// ==========================================================================
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;
    
    function animateSkillBars() {
        if (skillsAnimated) return;
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) {
                setTimeout(() => {
                    bar.style.width = width;
                }, Math.random() * 500);
            }
        });
        
        skillsAnimated = true;
    }
    
    // Trigger skill bars animation when skills section is visible
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }
}

// ==========================================================================
// Projects - Keep as is, components.js handles project filtering differently
// ==========================================================================
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (!projectsGrid || !window.projects) return;
    
    // Render projects
    function renderProjects(projectsToShow = projects) {
        projectsGrid.innerHTML = '';
        
        projectsToShow.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
        
        // Re-initialize scroll animations for new elements
        const newAnimatedElements = projectsGrid.querySelectorAll('.fade-in-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        newAnimatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Create project card
    function createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = `project-card fade-in-up delay-${(index % 3) + 1}`;
        card.setAttribute('data-category', project.category.join(' '));
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)';">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link" title="View Code"><i class="fab fa-github"></i></a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-meta">
                    <span><i class="fas fa-calendar-alt mr-1"></i>Date: ${project.year}</span>
                    <span><i class="fas fa-code mr-1"></i>${project.technologies.length} Technologies</span>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Filter projects
    function filterProjects(category) {
        const filteredProjects = category === 'all' 
            ? projects 
            : projects.filter(project => project.category.includes(category));
        
        // Animate out current projects
        const currentCards = projectsGrid.querySelectorAll('.project-card');
        currentCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }, index * 50);
        });
        
        // Render new projects after animation
        setTimeout(() => {
            renderProjects(filteredProjects);
        }, currentCards.length * 50 + 200);
    }
    
    // Filter button events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            const category = btn.getAttribute('data-filter');
            filterProjects(category);
        });
    });
    
    // Initial render
    renderProjects();
}

// Use the updated timeline function from the previous artifact
// ==========================================================================
// Timeline - Updated with better error handling and inline styles
// ==========================================================================
function initializeTimeline() {
    const timeline = document.querySelector('.timeline');
    const educationGrid = document.querySelector('.education-grid');
    
    console.log('Timeline elements:', { timeline, educationGrid }); // Debug log
    console.log('Experience data:', window.experience); // Debug log
    console.log('Education data:', window.education); // Debug log
    
    // Render experience timeline
    if (timeline && window.experience) {
        timeline.innerHTML = ''; // Clear existing content
        
        window.experience.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item fade-in-up delay-${(index % 3) + 1}`;
            
            // Add inline styles as fallback
            timelineItem.style.cssText = `
                position: relative;
                padding: 2rem 0 2rem 3rem;
                border-left: 2px solid #e5e7eb;
                margin-bottom: 2rem;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
            `;
            
            timelineItem.innerHTML = `
                <div class="timeline-marker" style="
                    position: absolute;
                    left: -8px;
                    top: 2rem;
                    width: 14px;
                    height: 14px;
                    background: #3b82f6;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 0 0 2px #3b82f6;
                "></div>
                <div class="timeline-date" style="
                    color: #6b7280;
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                ">${item.startDate} - ${item.endDate}</div>
                <h3 class="timeline-title" style="
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 0.25rem;
                ">${item.position}</h3>
                <div class="timeline-company" style="
                    color: #3b82f6;
                    font-weight: 600;
                    margin-bottom: 1rem;
                ">${item.company} • ${item.location}</div>
                <p class="timeline-description" style="
                    color: #4b5563;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                ">${item.description}</p>
                <div class="timeline-achievements">
                    <h4 style="
                        font-weight: 600;
                        color: #1f2937;
                        margin-bottom: 0.5rem;
                        font-size: 0.9rem;
                    ">Key Achievements:</h4>
                    <ul style="
                        list-style: none;
                        padding-left: 0;
                        margin: 0;
                    ">
                        ${item.achievements.map(achievement => `
                            <li style="
                                position: relative;
                                padding-left: 1.5rem;
                                margin-bottom: 0.5rem;
                                color: #4b5563;
                                line-height: 1.5;
                            ">
                                <span style="
                                    position: absolute;
                                    left: 0;
                                    top: 0.5rem;
                                    width: 6px;
                                    height: 6px;
                                    background: #10b981;
                                    border-radius: 50%;
                                "></span>
                                ${achievement}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="timeline-tech" style="
                    margin-top: 1rem;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                ">
                    ${item.technologies ? item.technologies.map(tech => `
                        <span style="
                            background: #eff6ff;
                            color: #2563eb;
                            padding: 0.25rem 0.75rem;
                            border-radius: 1rem;
                            font-size: 0.75rem;
                            font-weight: 500;
                        ">${tech}</span>
                    `).join('') : ''}
                </div>
            `;
            
            timeline.appendChild(timelineItem);
            
            // Trigger animation
            setTimeout(() => {
                timelineItem.style.opacity = '1';
                timelineItem.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    // Render education
    if (educationGrid && window.education) {
        educationGrid.innerHTML = ''; // Clear existing content
        
        window.education.forEach((item, index) => {
            const educationCard = document.createElement('div');
            educationCard.className = `education-card fade-in-up delay-${(index % 2) + 1}`;
            
            // Add inline styles as fallback
            educationCard.style.cssText = `
                background: white;
                border-radius: 1rem;
                padding: 2rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border: 1px solid #e5e7eb;
                margin-bottom: 1.5rem;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
                hover: {
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                    transform: translateY(-5px);
                }
            `;
            
            educationCard.innerHTML = `
                <div class="education-icon" style="
                    width: 3rem;
                    height: 3rem;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                ">
                    <i class="fas fa-graduation-cap" style="
                        color: white;
                        font-size: 1.25rem;
                    "></i>
                </div>
                <div class="education-degree" style="
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                ">${item.degree}</div>
                <div class="education-school" style="
                    color: #3b82f6;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                ">${item.school}</div>
                <div class="education-location" style="
                    color: #6b7280;
                    font-size: 0.875rem;
                    margin-bottom: 0.5rem;
                ">${item.location}</div>
                <div class="education-year" style="
                    color: #6b7280;
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: 1rem;
                ">${item.year} ${item.gpa ? `• GPA: ${item.gpa}` : ''}</div>
                <div class="education-description" style="
                    color: #4b5563;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                ">${item.description}</div>
                ${item.coursework ? `
                    <div class="education-coursework" style="margin-bottom: 1rem;">
                        <h5 style="
                            font-weight: 600;
                            color: #1f2937;
                            margin-bottom: 0.5rem;
                            font-size: 0.9rem;
                        ">Relevant Coursework:</h5>
                        <div style="
                            display: flex;
                            flex-wrap: wrap;
                            gap: 0.5rem;
                        ">
                            ${item.coursework.map(course => `
                                <span style="
                                    background: #f3f4f6;
                                    color: #374151;
                                    padding: 0.25rem 0.5rem;
                                    border-radius: 0.375rem;
                                    font-size: 0.75rem;
                                ">${course}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                ${item.honors ? `
                    <div class="education-honors">
                        <h5 style="
                            font-weight: 600;
                            color: #1f2937;
                            margin-bottom: 0.5rem;
                            font-size: 0.9rem;
                        ">Honors:</h5>
                        <ul style="
                            list-style: none;
                            padding-left: 0;
                            margin: 0;
                        ">
                            ${item.honors.map(honor => `
                                <li style="
                                    position: relative;
                                    padding-left: 1.5rem;
                                    margin-bottom: 0.25rem;
                                    color: #4b5563;
                                    font-size: 0.875rem;
                                ">
                                    <span style="
                                        position: absolute;
                                        left: 0;
                                        top: 0.4rem;
                                        width: 4px;
                                        height: 4px;
                                        background: #fbbf24;
                                        border-radius: 50%;
                                    "></span>
                                    ${honor}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            `;
            
            educationGrid.appendChild(educationCard);
            
            // Trigger animation
            setTimeout(() => {
                educationCard.style.opacity = '1';
                educationCard.style.transform = 'translateY(0)';
            }, (index + 1) * 300);
        });
    }
    
    // Also render certifications if they exist
    if (window.certifications && educationGrid) {
        window.certifications.slice(0, 3).forEach((cert, index) => {
            const certCard = document.createElement('div');
            certCard.className = `certification-card fade-in-up delay-${index + 3}`;
            
            certCard.style.cssText = `
                background: linear-gradient(135deg, #f3f4f6, #ffffff);
                border-radius: 1rem;
                padding: 1.5rem;
                border-left: 4px solid #10b981;
                margin-bottom: 1rem;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
            `;
            
            certCard.innerHTML = `
                <div class="cert-icon" style="
                    width: 2.5rem;
                    height: 2.5rem;
                    background: #10b981;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                ">
                    <i class="fas fa-certificate" style="color: white; font-size: 1rem;"></i>
                </div>
                <h4 style="
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                    line-height: 1.4;
                ">${cert.name}</h4>
                <div style="
                    color: #6b7280;
                    font-size: 0.875rem;
                    margin-bottom: 0.25rem;
                ">${cert.issuer}</div>
                <div style="
                    color: #6b7280;
                    font-size: 0.8rem;
                ">${cert.date}</div>
            `;
            
            educationGrid.appendChild(certCard);
            
            // Trigger animation
            setTimeout(() => {
                certCard.style.opacity = '1';
                certCard.style.transform = 'translateY(0)';
            }, (index + window.education.length + 1) * 300);
        });
    }
}

// Keep the rest of your functions...
// ... (other functions remain the same)