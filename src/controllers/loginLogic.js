/* eslint-disable operator-linebreak */
import { cleanMessageErrors, messageError } from '../errors/messageError.js';
import { createUser } from '../lib/index.js';

export const loginLogic = () => {
  const container = document.querySelector('.container');
  const pwShowHide = document.querySelectorAll('.showHidePw');
  const pwFields = document.querySelectorAll('.password');
  const signUp = document.querySelector('.signup-link');
  const login = document.querySelector('.login-link');

  // firebase
  const registerEmail = document.getElementById('register-email');
  const registerPassword = document.getElementById('register-password');
  const formSignup = document.getElementById('form-signup');

  //   js code to show/hide password and change icon
  pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
      pwFields.forEach((pwField) => {
        if (pwField.type === 'password') {
          pwField.type = 'text';

          pwShowHide.forEach((icon) => {
            icon.classList.replace('uil-eye-slash', 'uil-eye');
          });
        } else {
          pwField.type = 'password';

          pwShowHide.forEach((icon) => {
            icon.classList.replace('uil-eye', 'uil-eye-slash');
          });
        }
      });
    });
  });

  // js code to appear signup and login form
  signUp.addEventListener('click', () => {
    // container.classList.remove('active');
    container.classList.add('active');
  });

  login.addEventListener('click', () => {
    container.classList.remove('active');
  });

  // check if passwords match
  const createPassword = document.getElementById('create-password');
  const confirmPassword = document.getElementById('register-password');
  const registerInput = document.querySelectorAll('#form-signup .input-field');

  const checkPassword = () => {
    cleanMessageErrors(formSignup);
    if (
      confirmPassword.value &&
      createPassword.value &&
      createPassword.value !== confirmPassword.value
    ) {
      messageError('Password should match', registerInput[3]);
    }
  };
  createPassword.addEventListener('change', checkPassword);
  confirmPassword.addEventListener('change', checkPassword);

  // firebase
  formSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    cleanMessageErrors(formSignup);
    createUser(registerEmail.value, registerPassword.value);
  });
};
