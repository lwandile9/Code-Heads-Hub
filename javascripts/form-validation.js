console.log('script runs');

function validateLogin(event) {

  event.preventDefault();

  
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  let isValid = true;

  
  if (!email.value.includes('@')) {
    alert("Email must be in the format 'example@gmail.com'");
    isValid = false;
  }


  if (password.value.length <= 4) {
    alert("Password must be longer than 4 characters");
    isValid = false;
  }

  
  if (isValid) {
    alert('Form submitted successfully');
 
  }
}

const validateEmptyInput = (inputElement) => {
  if (!inputElement) {
    console.log('No element found');
  } else {
    if (inputElement.value === "") {
      alert('Empty input');
    } else if (inputElement.value.length <= 2) {
      alert('Invalid string length, must be greater than 2 characters');
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', validateLogin);
