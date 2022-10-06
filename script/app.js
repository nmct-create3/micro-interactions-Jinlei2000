let email = {},
  password = {},
  signInButton;

function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  console.log('handlePasswordSwitcher');
  let test = true;
  document.querySelector('.js-password').addEventListener('change', function (e) {
    console.log('click');
    if (test == true) {
      document.querySelector('.js-password-input').type = 'text';
      test = false;
    } else {
      document.querySelector('.js-password-input').type = 'password';
      test = true;
    }
  });
}

function getDOMElements() {
  email.input = document.querySelector('.js-email-input');
  email.field = document.querySelector('.js-email-field');
  email.errorMessage = document.querySelector('.js-email-error-message');

  password.input = document.querySelector('.js-password-input');
  password.field = document.querySelector('.js-password-field');
  password.errorMessage = document.querySelector('.js-password-error-message');

  signInButton = document.querySelector('.js-sign-in-button');

  enableListeners();
}
const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const checkInputEmail = function () {
  if (isValidEmailAddress(email.input.value)) {
    email.input.removeEventListener('input', checkInputEmail);
    email.field.classList.remove('has-error');
    email.errorMessage.innerHTML = '';
  }
};

const checkInputPassword = function () {
  if (password.input.value.length >= 8) {
    password.input.removeEventListener('input', checkInputPassword);
    password.field.classList.remove('has-error');
    password.errorMessage.innerHTML = '';
  }
};

function enableListeners() {
  email.input.addEventListener('blur', function () {
    console.log('email test');
    if (isEmpty(email.input.value)) {
      email.field.classList.add('has-error');
      email.errorMessage.innerHTML = 'This filed is required';
    } else if (!isValidEmailAddress(email.input.value)) {
      email.field.classList.add('has-error');
      email.errorMessage.innerHTML = 'Invalid emailaddress';
      email.input.addEventListener('input', checkInputEmail);
    }
  });

  password.input.addEventListener('blur', function () {
    console.log('password test');
    if (isEmpty(password.input.value)) {
      password.field.classList.add('has-error');
      password.errorMessage.innerHTML = 'This filed is required';
    } else if (password.input.value.length < 8) {
      password.field.classList.add('has-error');
      password.errorMessage.innerHTML = 'At least 8 characters';
      email.input.addEventListener('input', checkInputPassword);
    } else {
      password.field.classList.remove('has-error');
      password.errorMessage.innerHTML = '';
    }
  });

  signInButton.addEventListener('click', function () {
    console.log('button sign in test');
    if (isEmpty(email.input.value)) {
      email.field.classList.add('has-error');
      email.errorMessage.innerHTML = 'This filed is required';
    } else if (!isValidEmailAddress(email.input.value)) {
      email.field.classList.add('has-error');
      email.errorMessage.innerHTML = 'Invalid emailaddress';
      email.input.addEventListener('input', checkInputEmail);
    }

    if (isEmpty(password.input.value)) {
      password.field.classList.add('has-error');
      password.errorMessage.innerHTML = 'This filed is required';
    } else if (password.input.value.length < 8) {
      password.field.classList.add('has-error');
      password.errorMessage.innerHTML = 'At least 8 characters';
      email.input.addEventListener('input', checkInputPassword);
    } else {
      password.field.classList.remove('has-error');
      password.errorMessage.innerHTML = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  //   handleFloatingLabel();
  //   handlePasswordSwitcher();
  getDOMElements();
});
