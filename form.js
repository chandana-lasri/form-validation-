
function validateField(input) {
  const fieldId = input.id;
  const fieldValue = input.value;

  switch (fieldId) {
    case 'fullName':
      if (fieldValue.length < 5) {
        document.getElementById('fullNameError').textContent = 'Name must have at least 5 characters';
      } else {
        document.getElementById('fullNameError').textContent = '';
      }
      break;
    case 'email':
      if (!fieldValue.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
      } else {
        document.getElementById('emailError').textContent = '';
      }
      break;
    case 'phone':
      if (fieldValue === '123456789' || fieldValue.length !== 10 || isNaN(fieldValue)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
      } else {
        document.getElementById('phoneError').textContent = '';
      }
      break;
    case 'password':
      if (fieldValue === 'password' || fieldValue.length < 8 || fieldValue === document.getElementById('fullName').value) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and not be "password" or user name';
      } else {
        document.getElementById('passwordError').textContent = '';
      }
      break;
    case 'confirmPassword':
      if (fieldValue !== document.getElementById('password').value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
      } else {
        document.getElementById('confirmPasswordError').textContent = '';
      }
      break;
    case 'gender':
      if (fieldValue === '') {
        document.getElementById('gender').classList.add('is-invalid');
      } else {
        document.getElementById('gender').classList.remove('is-invalid');
      }
      break;
    case 'robotVerification':
      if (!input.checked) {
        document.getElementById('robotError').textContent = 'Please verify that you are not a robot';
      } else {
        document.getElementById('robotError').textContent = '';
      }
      break;
    default:
      break;
  }
}

function validateForm() {
  const form = document.getElementById('myForm');
  const fields = form.elements;
  let isValid = true;

  for (let i = 0; i < fields.length; i++) {
    if (fields[i].type !== 'submit' && fields[i].type !== 'reset') {
      const fieldId = fields[i].id;
      const fieldValue = fields[i].value;

      switch (fieldId) {
        case 'fullName':
          if (fieldValue.length < 5) {
            document.getElementById('fullNameError').textContent = 'Name must have at least 5 characters';
            isValid = false;
          }
          break;
        case 'email':
          if (!fieldValue.includes('@')) {
            document.getElementById('emailError').textContent = 'Enter a valid email';
            isValid = false;
          }
          break;
        case 'phone':
          if (fieldValue === '123456789' || fieldValue.length !== 10 || isNaN(fieldValue)) {
            document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
            isValid = false;
          }
          break;
        case 'password':
          if (fieldValue === 'password' || fieldValue.length < 8 || fieldValue === document.getElementById('fullName').value) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and not be "password" or user name';
            isValid = false;
          }
          break;
        case 'confirmPassword':
          if (fieldValue !== document.getElementById('password').value) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
          }
          break;
        case 'gender':
          if (fieldValue === '') {
            document.getElementById('gender').classList.add('is-invalid');
            isValid = false;
          }
          break;
        case 'robotVerification':
          if (!fields[i].checked) {
            document.getElementById('robotError').textContent = 'Please verify that you are not a robot';
            isValid = false;
          }
          break;
        default:
          break;
      }
    }
  }

  if (isValid) {
    document.getElementById('submissionMessage').textContent = 'Form submitted successfully!';
  }
}