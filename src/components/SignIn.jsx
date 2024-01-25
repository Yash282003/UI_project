import React from "react";
import "../styles/SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdLock } from "react-icons/md";

function SignIn() {
  return (
    <div>
      <div className="heading">
        <div className="head-first">
          <h3>Sign In</h3>
          {/* <hr className="heading-divider" /> */}
        </div>

        <div className="head-second">
          <h3>Log In</h3>
        </div>
      </div>
      <div className="wrapper">
        <div className="google-icon-wrapper">
          <FcGoogle id="google-icon" />
        </div>
        <button className="button">Continue with Google</button>
      </div>
      <div className="wrapper">
        <div className="facebook-icon-wrapper">
          <FaFacebook id="facebook-icon" />
        </div>
        <button className="button">Continue with Facebook</button>
      </div>
      <div className="container">
        <h2 className="title">Or connect with</h2>
      </div>
      <div className="write">
        <input placeholder="Email" className="signin-input" />
      </div>
      <div className="write">
        <input placeholder="Password" className="signin-input" />

        <div className="wrapper-password">
          <FaEyeSlash id="password-icon" />
        </div>
      </div>
      <div className="remember-me-container">
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="remember-me-label">
            Remember Me
          </label>
        </div>
        <div className="forget-me">
          <div className="forget-wrapper">
            <MdLock id="lock-icon" />
          </div>
          <div htmlFor="rememberMe" className="remember-me-div">
            Forgot Password
          </div>
        </div>
      </div>
      <button className="button-continue">Continue</button>
    </div>
  );
}

export default SignIn;
