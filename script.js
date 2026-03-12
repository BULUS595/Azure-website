// ==========================================
// EMAILJS INITIALIZATION
// ==========================================

// EmailJS initialization with retry logic
let emailjsRetryCount = 0;
const MAX_EMAILJS_RETRIES = 30; // Max 3 seconds
let emailjsInitialized = false;

function initEmailJS() {
    // Check for emailjs library in multiple locations
    const emailjsLib = typeof emailjs !== 'undefined' ? emailjs : 
                       typeof window.emailjs !== 'undefined' ? window.emailjs :
                       null;
    
    if (emailjsLib && emailjsLib.init) {
        try {
            emailjsLib.init('M8YbaMb1hqQFyheiv');
            emailjsInitialized = true;
            console.log('✓ EmailJS initialized successfully');
            return;
        } catch (error) {
            console.error('Error initializing EmailJS:', error);
            emailjsInitialized = false;
        }
    }
    
    emailjsRetryCount++;
    
    if (emailjsRetryCount < MAX_EMAILJS_RETRIES) {
        setTimeout(initEmailJS, 100);
    } else {
        console.error('❌ EmailJS failed to load. CDN may be unavailable or blocked.');
        emailjsInitialized = false;
    }
}

// Initialize immediately
initEmailJS();

// Initialize after DOM ready
document.addEventListener('DOMContentLoaded', initEmailJS);

// Try again on full page load
window.addEventListener('load', () => {
    if (!emailjsInitialized) {
        setTimeout(initEmailJS, 500);
    }
});

// ==========================================
// ==========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

window.addEventListener('scroll', () => {
    updateActiveLink();
});

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==========================================
// CONTACT FORM HANDLER - EMAILJS
// ==========================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check if EmailJS is initialized
    if (!emailjsInitialized || typeof emailjs === 'undefined') {
        showStatus('Email service is loading. Please wait a moment and try again.', 'error');
        console.error('EmailJS not initialized. Retry count:', emailjsRetryCount);
        return;
    }

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const request = document.getElementById('request').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showStatus('Please enter a valid email address', 'error');
        return;
    }

    // Validate form
    if (!name || !email || !phone || !request || !message) {
        showStatus('Please fill in all fields', 'error');
        return;
    }

    // Show loading state
    showStatus('Sending your message...', '');

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_3qvet2i',     // Your Service ID
            'template_yfey2qh',    // Your Template ID
            {
                from_name: name,
                from_email: email,
                phone_number: phone,
                project_request: request,
                message: message,
                to_email: 'dre7080552@gmail.com',
                reply_to: email  // Add reply-to for better email routing
            },
            'M8YbaMb1hqQFyheiv'  // Explicit public key
        );

        // Log success for debugging
        console.log('✓ Email sent successfully!', response);

        if (response.status === 200) {
            showStatus('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        }
    } catch (error) {
        // Detailed error logging
        console.error('❌ EmailJS Error:', error);
        console.error('Error Name:', error.name);
        console.error('Error Message:', error.message);
        
        if (error.status) {
            console.error('Error Status:', error.status);
        }
        
        if (error.text) {
            console.error('Error Details:', error.text);
        }

        // User-friendly error message
        let userMessage = 'Failed to send message. ';
        
        if (error.status === 0) {
            userMessage += 'Network error. Check your internet connection.';
        } else if (error.status === 400) {
            userMessage += 'Invalid form data. Please check your inputs.';
        } else if (error.status === 401) {
            userMessage += 'Authentication error. Please try again in a few moments.';
        } else if (error.status === 403) {
            userMessage += 'Permission denied. Service may be temporarily unavailable.';
        } else if (error.text) {
            userMessage += error.text;
        } else {
            userMessage += 'Please try again shortly.';
        }
        
        showStatus(userMessage, 'error');
    }
});

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;

    // Clear message after 6 seconds for success, keep error visible
    if (type === 'success') {
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 6000);
    }
}

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================

window.addEventListener('load', () => {
    updateActiveLink();
});
