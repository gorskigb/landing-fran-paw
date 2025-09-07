// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.projectType || !data.message) {
            showAlert('Proszę wypełnić wszystkie wymagane pola.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showAlert('Proszę podać prawidłowy adres email.', 'error');
            return;
        }

        // Phone validation (optional)
        if (data.phone && !/^[\+]?[\d\s\-\(\)]+$/.test(data.phone)) {
            showAlert('Proszę podać prawidłowy numer telefonu.', 'error');
            return;
        }

        // Submit form
        submitForm(this, data);
    });
}

// Form submission function
function submitForm(form, data) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Wysyłanie...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        // Success simulation
        showAlert('Dziękujemy za zapytanie! Skontaktujemy się z Tobą w ciągu 24 godzin.', 'success');
        form.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        
        // Optional: Send to actual API
        // sendToAPI(data);
        
    }, 1500);
}

// Alert system
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.custom-alert');
    existingAlerts.forEach(alert => alert.remove());

    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert custom-alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-${getAlertIcon(type)}"></i>
            <span>${message}</span>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        z-index: 10000;
        background: ${getAlertColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.2);
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        font-family: inherit;
    `;

    const alertContent = alert.querySelector('.alert-content');
    alertContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;

    const closeButton = alert.querySelector('.alert-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 0.9rem;
        opacity: 0.8;
        transition: opacity 0.2s ease;
        margin-left: auto;
    `;

    closeButton.addEventListener('mouseenter', () => closeButton.style.opacity = '1');
    closeButton.addEventListener('mouseleave', () => closeButton.style.opacity = '0.8');

    // Add to page
    document.body.appendChild(alert);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);
}

// Helper functions for alerts
function getAlertIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || icons.info;
}

function getAlertColor(type) {
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    return colors[type] || colors.info;
}

// Add CSS animations for alerts
const alertStyles = document.createElement('style');
alertStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(alertStyles);

// Real-time form validation
function addRealTimeValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    clearFieldError(field);

    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'To pole jest wymagane';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Nieprawidłowy format email';
        }
    }

    // Phone validation
    if (field.type === 'tel' && value) {
        if (!/^[\+]?[\d\s\-\(\)]+$/.test(value)) {
            isValid = false;
            errorMessage = 'Nieprawidłowy format telefonu';
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    field.style.background = 'rgba(231, 76, 60, 0.1)';
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 0.25rem;
        animation: fadeIn 0.2s ease;
    `;
    
    field.parentElement.appendChild(errorElement);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.background = '';
    
    const errorElement = field.parentElement.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Optional: Send data to actual API
function sendToAPI(data) {
    // Example API call (replace with your actual endpoint)
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
        showAlert('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.', 'error');
    });
    */
}

// Initialize real-time validation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addRealTimeValidation();
});

console.log('FRAN-PAW Forms JavaScript Loaded Successfully! 📝');