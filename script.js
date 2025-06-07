(function(){
            emailjs.init("7Zs3J0Vy-D_cdTWg8"); // Replace with your EmailJS public key
        })();
        
        // Scroll reveal animation
        window.addEventListener('scroll', reveal);
        
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            
            for(let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;
                
                if(elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
        
        // Mobile navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('nav ul');
        
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        
        // Close mobile navigation on link click
        navLinks.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Extract form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Send email using EmailJS
            emailjs.send('service_xxx', 'template_xxx', data)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Message failed to send. Please try again later.');
                });
        });