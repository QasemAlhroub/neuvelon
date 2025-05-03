document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            // Optional: Change button aria-expanded attribute
            const isExpanded = mobileMenu.classList.contains('active');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu if clicking outside of it (optional)
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = menuButton.contains(event.target);
            if (!isClickInsideMenu && !isClickOnButton) {
                mobileMenu.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Contact Form Handling (Placeholder)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Basic validation example (can be expanded)
            const emailInput = document.getElementById('email');
            if (!emailInput || !emailInput.value) {
                formStatus.textContent = 'Please enter your email address.';
                formStatus.style.color = 'red';
                return;
            }

            // Simulate form submission
            formStatus.textContent = 'Thank you for your message! (This is a demo - form not submitted)';
            formStatus.style.color = 'green';

            // Optionally clear the form
            // contactForm.reset();

            // Hide the message after a few seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }

});
