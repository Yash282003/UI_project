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
          <h2 className="about_us">Social media</h2>

          <div className="social-media-links">
              <div>
                <img src={insta} />
              </div>
              <div>
                <img src={pintrest} />
              </div>
              <div>
                <img src={facebook} />
              </div>
              <div>
                <img src={telegram} />
              </div>
              <div>
                <img src={google} />
              </div>
              <div>
                <img src={twitter} />
              </div>
              <div>
                <img src={youtube} />
              </div>
              <div>
                <img src={email} />
              </div>
          </div>
          <div className="social-invite">
            <h2 className="about_us">Invite friends</h2>
            <div className="input-wrapper">
              <input placeholder="Email ID" className="navbar-input" />

              <div className="search-icon-wrapper">
                <IoSearch id="search-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last">
        <p className="footer-last-para">© Purple Cues Private Limited</p>
      </div>
    </div>
  );
}

export default Footer;
