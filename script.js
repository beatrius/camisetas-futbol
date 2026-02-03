// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize first testimonial
showTestimonial(0);

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    nextTestimonial();
}, 5000);

// Scroll to form
function scrollToForm() {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const units = document.getElementById('units').value;
    const message = document.getElementById('message').value;
    
    // Validate required fields
    if (!name || !phone || !email) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `Hola Marcos Beltrán,\n\nMe gustaría solicitar un presupuesto para camisetas de fútbol personalizadas.\n\n` +
        `Nombre: ${name}\n` +
        `Teléfono: ${phone}\n` +
        `Email: ${email}\n` +
        `Unidades: ${units || 'No especificado'}\n` +
        `Mensaje: ${message || 'Sin comentarios adicionales'}`
    );
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/34619612081?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Reset form
    this.reset();
});

// Open WhatsApp from footer button
function openWhatsApp() {
    const message = encodeURIComponent('Hola Marcos Beltrán, me gustaría información sobre camisetas de fútbol personalizadas.');
    window.open(`https://wa.me/34619612081?text=${message}`, '_blank');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards and feature sections
document.querySelectorAll('.product-card, .feature-row, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed for future expansion)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Add keyboard navigation for testimonials
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

console.log('Marcos Beltrán SL - Sitio web cargado correctamente');