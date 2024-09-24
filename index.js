document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form fields
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const check = document.getElementById('check');
    const modal = document.querySelector('.modal')
  
    // Get error message elements
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const checkboxError = document.getElementById('checkboxError');
  
    // Function to clear errors when user starts typing
    function clearErrorOnInput(input, errorElement) {
      input.addEventListener('input', function() {
        input.classList.remove('error');
        errorElement.innerText = "";
        errorElement.style.display = "none";
      });
    }
  
    // Reset error messages
    firstNameError.innerText = "";
    lastNameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    checkboxError.innerText = "";
  
    // Remove previous error styles
    firstName.classList.remove('error');
    lastName.classList.remove('error');
    email.classList.remove('error');
    message.classList.remove('error');
    check.classList.remove('error');
  
    let isValid = true;
  
    // Validate first name
    if (firstName.value.trim() === "") {
      firstNameError.innerText = "First name is required.";
      firstNameError.style.display = "block";
      firstName.classList.add('error');
      isValid = false;
    }
  
    // Validate last name
    if (lastName.value.trim() === "") {
      lastNameError.innerText = "Last name is required.";
      lastNameError.style.display = "block";
      lastName.classList.add('error');
      isValid = false;
    }
  
    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.innerText = "Please enter a valid email.";
      emailError.style.display = "block";
      email.classList.add('error');
      isValid = false;
    }
  
    // Validate message
    if (message.value.trim().length < 12) {
      messageError.innerText = "Message must be at least 12 characters.";
      messageError.style.display = "block";
      message.classList.add('error');
      isValid = false;
    }
  
    // Validate checkbox
    if (!check.checked) {
      checkboxError.innerText = "You must consent to be contacted.";
      checkboxError.style.display = "block";
      check.classList.add('error');
      isValid = false;
    }
  
    // Attach event listeners to clear error on input
    clearErrorOnInput(firstName, firstNameError);
    clearErrorOnInput(lastName, lastNameError);
    clearErrorOnInput(email, emailError);
    clearErrorOnInput(message, messageError);
  
    // To clear checkbox error when the user checks/unchecks the box
    check.addEventListener('change', function() {
      check.classList.remove('error');
      checkboxError.innerText = "";
      checkboxError.style.display = "none";
    });
  
    if (isValid) {
        // If the form is valid, submit it
        modal.style.display = 'grid';
        setTimeout(() => {
          modal.style.display = 'none'
        }, 2000);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        message.value = '';
        check.checked = false; // Uncheck the checkbox
        // You can add logic here to submit the form data to the server
    }
  });
  