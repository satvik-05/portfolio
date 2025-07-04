// DOM Elements
// const hamburger = document.querySelector('.hamburger'); // Not present in HTML, commented out
// const navMenu = document.querySelector('.nav-menu'); // Not present in HTML, commented out
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle - Your current HTML doesn't have a hamburger or mobile menu structure
// If you add one, uncomment and adapt this:
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
// });

// Close mobile menu when clicking on a link
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         if (hamburger && navMenu) { // Check if elements exist before toggling
//             hamburger.classList.remove('active');
//             navMenu.classList.remove('active');
//         }
//     });
// });

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`); // More specific selector

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Theme State (moved outside function for broader scope)
let isDark; // Declare globally but initialize in DOMContentLoaded

// Navbar Background on Scroll and Theme Application
function updateNavbar() {
    const navbar = document.querySelector('.navbar'); // Correctly targets the nav now
    if (!navbar) return; // Exit if navbar element is not found

    // Always get the current theme state before applying styles
    // This `isDark` variable will be managed by the theme toggle and localStorage
    const currentIsDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (window.scrollY > 50) {
        navbar.style.background = currentIsDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; // Add shadow on scroll
    } else {
        // Use direct CSS variable for initial state
        navbar.style.background = 'var(--bg-secondary)'; // Use the defined variable
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'; // Initial shadow
    }
}


// Scroll Reveal Animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Skill Item Hover Effects
function initializeSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)'; // Uses CSS transform from stylesheet
            item.style.boxShadow = 'var(--shadow-lg)';
            item.style.borderColor = 'var(--primary-color)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)'; // Uses CSS transform from stylesheet
            item.style.boxShadow = 'var(--shadow-md)'; // Revert to initial shadow
            item.style.borderColor = 'var(--border-color)'; // Revert border
        });
    });
}

// Project Card Animations
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)'; // Uses CSS transform from stylesheet
            card.style.boxShadow = 'var(--shadow-xl)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)'; // Uses CSS transform from stylesheet
            card.style.boxShadow = 'var(--shadow-md)'; // Revert to initial shadow
        });
    });
}

// Initialize EmailJS
(function() {
    // Replace with your actual EmailJS User ID
    emailjs.init("YOUR_EMAILJS_USER_ID"); // IMPORTANT: Replace this with your User ID!
})();

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Get submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Prepare email template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Satvik' // Replace with your name if different
        };

        // Send email using EmailJS
        // IMPORTANT: Replace 'service_luveo7f' and 'template_h5qyjal' with YOUR EmailJS Service ID and Template ID
        emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                showNotification('Failed to send message. Please email me directly at satvik.jangala@gmail.com or connect on LinkedIn.', 'error');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    // Clear element content initially to prevent flicker if JS loads slow
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    // Capture the original text from the HTML before typing starts
    const originalText = element.textContent;
    // Store original text in a data attribute to restore if needed or if user navigates away
    element.dataset.originalText = originalText;
    element.textContent = ''; // Clear for typing animation

    type();
}

// Parallax effect for hero section
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        // Adjust the speed for a more subtle effect if desired
        const speed = scrolled * 0.2; // Reduced speed from 0.5 to 0.2 for less aggressive parallax
        hero.style.transform = `translateY(${speed}px)`;
    }
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const animatedCounters = new Set(); // To prevent re-animating

    counters.forEach(counter => {
        // Only animate if not already animated
        if (!animatedCounters.has(counter)) {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : ''); // Preserve '+'
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                    animatedCounters.add(counter); // Mark as animated
                }
            };
            updateCounter();
        }
    });
}


// Intersection Observer for scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-content, .skills-category, .project-card, .edu-card, .ach-card, .contact-item, .contact-form'); // Added edu/ach/contact cards
    animateElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.navbar-theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Function to get current theme preference
    function getIsDark() {
        return localStorage.getItem('theme') === 'dark' ||
               (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    // Function to apply theme
    function setTheme(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun'; // Sun icon for dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.className = 'fas fa-moon'; // Moon icon for light mode
            localStorage.setItem('theme', 'light');
        }
        // Update navbar background immediately after theme change
        updateNavbar();
    }

    // Initialize theme based on local storage or system preference
    isDark = getIsDark(); // Update the global `isDark` variable
    setTheme(isDark);

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            isDark = !getIsDark(); // Invert current state
            setTheme(isDark);
        });
    }

    initializeSkillItems();
    initializeProjectCards();
    initializeScrollAnimations();

    // Initialize typing animation when page loads
    const heroTitleElement = document.querySelector('.hero-title');
    if (heroTitleElement) {
        const originalTitleText = heroTitleElement.textContent;
        // Temporarily store original text content
        heroTitleElement.dataset.originalText = originalTitleText;
        typeWriter(heroTitleElement, originalTitleText, 50); // Speed for typing
    }

    // Add scroll event listeners (throttled)
    window.addEventListener('scroll', throttle(() => {
        updateActiveNavLink();
        updateNavbar();
        revealOnScroll();
        parallaxEffect();
    }, 16)); // ~60fps

    // Trigger initial checks on load
    updateActiveNavLink();
    updateNavbar(); // Ensure navbar state is correct on load
    revealOnScroll(); // Ensure elements already in view are revealed

    // Animate counters when about section is visible
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    aboutObserver.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        aboutObserver.observe(aboutSection);
    }
});

// Add CSS for active nav link (moved to head via JS for dynamic injection)
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }

    .nav-link.active::after {
        width: 100% !important;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            lastRan = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}