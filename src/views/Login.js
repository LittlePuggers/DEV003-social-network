/* eslint-disable no-useless-escape */
import branchLogo from '../assets/branch.svg';
import logoGoogle from '../assets/logo-google.png';

export const Login = () => {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');
  divContainer.innerHTML = `
       <div class="forms">
       <div class="forms-title-logo"> 
      <h1>devgram</h1> 
      <img src="${branchLogo}" alt="logo devgram"> 
      </div>
        <div class="form login">
          <button class="button-google">
          <img src=${logoGoogle} alt="logo google">
          <p>Continue with Google</p>
          </button>
         <div class="continue-email">
          <p>or continue with email</p>
         </div>

          <form id="form-signin">
            <div class="input-field" title="Incomplete or invalid email">
              <input id="signin-email" title="Incomplete or invalid email" type="text" placeholder="Enter your email" pattern='^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$' name="emailSignin" required>
              <i class="fa-solid fa-envelope icon"></i>
            </div>
            <div class="input-field" title="Invalid password-only numbers and letters">
              <input id="signin-password" title="Invalid password only accept numbers and letters" name="passwordSignin" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\d]+$" type="password" class="password" placeholder="Enter your password" minlength='6' required>
              <i class="fa-solid fa-lock icon"></i>
              <i class="fa-solid fa-eye-slash showHidePw"></i>
            </div>

            <div class="checkbox-text">
              <div class="checkbox-content">
                <input type="checkbox" id="logCheck">
                <label for="logCheck" class="text remember">Remember me</label>
              </div>

              <a  class="text">Forgot password?</a>
            </div>

            <div class="input-field button">
              <input id="button-signin" type="submit" value="Login">
            </div>
          </form>

          <div class="login-signup">
            <span class="text">
              <p>Haven't created an account?</p>
              <a class="text signup-link">Signup Now</a>
            </span>
          </div>
        </div>

        <!-- Registration Form -->
        <div class="form signup">
          <span class="title">Registration</span>

          <form id="form-signup">
            <div class="input-field" title="Invalid name">
              <input id="register-name" title="Name only accepts letters and blank spaces" name="userNameSignup" type="text" placeholder="Enter your name" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-field" id="form-signup-email" title="Incomplete or invalid email" >
              <input id="register-email" title="Incomplete or invalid email" type="text" placeholder="Enter your email"  pattern='^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$' name="emailSignup" required>
              <i class="fa-solid fa-envelope icon"></i>
            </div>
            <div class="input-field" title="Invalid password-only numbers and letters">
              <input id="create-password" title="Invalid password only accept numbers and letters" name="firstPasswordSignup" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\d]+$" type="password" class="password" placeholder="Create a password" minlength='6' required>
              <i class="fa-solid fa-lock icon"></i>
              <i class="fa-solid fa-eye-slash showHidePw"></i>
            </div>
            <div class="input-field" title="Invalid password-only numbers and letters">
              <input id="register-password" title="Invalid password only accept numbers and letters" name="secondPasswordSignup" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\d]+$" type="password" class="password" placeholder="Confirm a password" minlength='6' required>
              <i class="fa-solid fa-lock icon"></i>
              <i class="fa-solid fa-eye-slash showHidePw"></i>
            </div>

            <div class="checkbox-text">
              <div class="checkbox-content">
                <input type="checkbox" id="termCon" required>
                <label for="termCon" class="text terms">I accept all terms and conditions</label>
              </div>
            </div>

            <div class="input-field button">
              <input id="button-signup" type="submit" value="Signup">
            </div>
          </form>

          <div class="login-signup">
            <span class="text">Already have an account?
              <a class="text login-link">Login Now</a>
            </span>
          </div>
        </div>
      </div>
   `;
  return divContainer;
};
