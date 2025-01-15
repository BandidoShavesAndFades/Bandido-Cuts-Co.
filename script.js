// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionID = event.target.getAttribute('href').slice(1);
    const section = document.getElementById(sectionID);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form Validation with Detailed Errors
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const nameField = document.querySelector('input[placeholder="Your Name"]');
  const emailField = document.querySelector('input[placeholder="Your Email"]');
  const dateField = document.querySelector('input[type="date"]');
  const messageField = document.querySelector('textarea');
  
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const date = dateField.value;
  const message = messageField.value.trim();

  let errors = [];

  if (!name) errors.push('Name is required.');
  if (!email) errors.push('Email is required.');
  if (email && !validateEmail(email)) errors.push('Invalid email format.');
  if (!date) errors.push('Appointment date is required.');

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }

  alert('Thank you, your appointment request has been submitted!');
  document.querySelector('form').reset();
});

// Email Validation Function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

// Dynamic Year Update in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
