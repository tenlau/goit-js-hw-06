const validationInput = document.getElementById('validation-input');
const requiredLength = parseInt(validationInput.getAttribute('data-length'), 10);

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
