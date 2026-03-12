// ==========================================
// EMAILJS INITIALIZATION
// ==========================================

// Initialize EmailJS - Replace with your Public Key
// Get your Public Key from EmailJS dashboard
emailjs.init('M8YbaMb1hqQFyheiv'); // TODO: Replace with your EmailJS Public Key

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

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const request = document.getElementById('request').value.trim();
    const message = document.getElementById('message').value.trim();

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
            'service_3qvet2i', // Your Service ID
            'template_yfey2qh', // Your Template ID
            {
                from_name: name,
                from_email: email,
                phone_number: phone,
                project_request: request,
                message: message,
                to_email: 'dre7080552@gmail.com'
            }
        );

        console.log('EmailJS Response:', response);

        if (response.status === 200) {
            showStatus('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showStatus('Error sending message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('EmailJS Error Details:', error);
        console.error('Error Status:', error.status);
        console.error('Error Text:', error.text);
        showStatus('Error: ' + (error.text || 'Failed to send message. Please try again.'), 'error');
    }
});

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;

    // Clear message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
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
