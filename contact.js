// script for handling contact form submission
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = contactForm.querySelector('#name').value.trim();
  const email = contactForm.querySelector('#email').value.trim();
  const message = contactForm.querySelector('#message').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate form submission
  alert('Your message has been sent successfully!');
  
  // Clear the form
  contactForm.reset();
});
