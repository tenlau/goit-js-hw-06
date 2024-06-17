document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert('All fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData); // Log the form data object to the console
  form.reset(); // Reset the form fields
});

