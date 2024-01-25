import React from "react";
import "../styles/Footer.css";
import ScrollToTop from "react-scroll-to-top";
import { IoSearch } from "react-icons/io5";
import insta from "../images/insta.png";
import pintrest from "../images/pintrest.png";
import google from "../images/google.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import email from "../images/email.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <ScrollToTop smooth top="20" />
      <div className="footer-wrapper-bg">
        <div className="bg-image">
          <h1 id="footer-bg-head">
            Your <span className="hobby">Hobby</span>, Your{" "}
            <span className="passion">Community</span>
          </h1>
          <a href="#" className="btn btn-primary bg-purple">
            Get started
          </a>
        </div>
      </div>
      <div className="footer-wrapper-end">
        <div className="hobbycue">
          <h2 className="about_us">About Us</h2>
          <ul>
            <li>About Us</li>
            <li>Our services</li>
            <li>Work with us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="how_do_i">
          <h2 className="about_us">How do I</h2>
          <ul>
            <li>About Us</li>
            <li>Our services</li>
            <li>Work with us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="quick_links">
          <h2 className="about_us">Quick links</h2>
          <ul>
            <li>About Us</li>
            <li>Our services</li>
            <li>Work with us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social_media">
          <h2>Social media</h2>

          <div className="social-media-links">
            <ul>
              <li>
                <img src={insta} />
              </li>
              <li>
                <img src={pintrest} />
              </li>
              <li>
                <img src={facebook} />
              </li>
              <li>
                <img src={telegram} />
              </li>
              <li>
                <img src={google} />
              </li>
              <li>
                <img src={twitter} />
              </li>
              <li>
                <img src={youtube} />
              </li>
              <li>
                <img src={email} />
              </li>
            </ul>
          </div>
          <div className="social-invite">
            <h2>Invite friends</h2>
            <div className="input-wrapper">
              <input placeholder="Email ID" className="navbar-input" />

              <div className="search-icon-wrapper">
                <IoSearch id="search-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
