// Mobile menu toggle functionality
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const navMenu = document.getElementById('navMenu');

        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const isOpen = navMenu.classList.contains('active');
            mobileMenuButton.textContent = isOpen ? '✕' : '☰';
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Close menu when clicking outside or on a link
        document.addEventListener('click', (e) => {
            const isClickInsideNav = navMenu.contains(e.target) || mobileMenuButton.contains(e.target);
            if (!isClickInsideNav) {
                navMenu.classList.remove('active');
                mobileMenuButton.textContent = '☰';
            }
        });

        // Animation for menu items when they become visible on mobile
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideIn 0.3s ease forwards';
                }
            });
        });

        document.querySelectorAll('.nav-menu li').forEach(item => {
            observer.observe(item);
        });



// Form submission handling with AJAX

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form6');
    const submitButton = form.querySelector('button[type="submit"]');
    const modal = document.getElementById('messageModal');
    const successModal = document.querySelector('.modal-content.success');
    const errorModal = document.querySelector('.modal-content.error');
    const closeButton = document.querySelector('.close-button','.modal-button');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submit

        const formData = new FormData(form);
        const userName = formData.get("data[NAME]");

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Form submission failed.");
                }
                return response.json();
            })
            .then(data => {
                // ✅ Show success modal
                successModal.querySelector('p').textContent = `Thank you, ${userName}, your message has been sent successfully!`;
                successModal.style.display = "block";
                errorModal.style.display = "none";
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // Disable scrolling
                form.reset(); // Clear the form
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                // ❌ Show error modal
                errorModal.querySelector('p').textContent = `Oops! Something went wrong. Please try again.`;
                successModal.style.display = "none";
                errorModal.style.display = "block";
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // Disable scrolling
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
            });
    });

    // Close modal on close button
    closeButton.addEventListener('click', function () {
        closeModal();
    });

    // Close modal when clicking outside content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Utility function to close modal and restore scroll
    function closeModal() {
        modal.style.display = "none";
        successModal.style.display = "none";
        errorModal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
});
   

  