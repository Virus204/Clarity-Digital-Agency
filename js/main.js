// Contact form: Bootstrap validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.checkValidity()) {
    alert('Message sent!');
    form.reset();
    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});
