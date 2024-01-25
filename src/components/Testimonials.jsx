import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Testimonials.css";
import Add from "../images/Add.png";
import quote from "../images/quote.png";
import play from "../images/play.png";
import dancerMic from "../images/dancerMic.png";
import dancer from "../images/dancer.png";

function Testimonials() {
  return (
    <>
      <div className="testimonial-first">
        <div class="testimonial-first-card">
          <div className="testimonial-first-card-heading">
            <img src={Add} alt="img" />
            <h3 className="testimonial-head">Add your own...</h3>
          </div>
          <div class="testimonial-first-card-body">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <div className="add-new-btn card-body">
            <a href="#" class="btn btn-primary btn-no-bg">
              Add new
            </a>
          </div>
        </div>
      </div>
      <div className="testimonial-second">
        <div class="testimonial-second-card">
          <div className="testimonial-second-card-heading">
            <img src={quote} alt="img" />
            <h3 className="testimonial-head">Testimonials</h3>
          </div>
          <div class="testimonial-second-card-body">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className="testimonial-footer">
            <div className="testimonial-footer-left">
              <div className="play-btn-icon">
                <img src={play} />
              </div>
              <div className="play-btn">
                <input type="range" value="0" id="progress" />
                0.00
              </div>
              <div className="image-icon">
                <img src={dancerMic} />
              </div>
            </div>
            <div className="testimonial-footer-right">
              <img src={dancer} />
              <div className="dancer-info">
               <h4 className="dancer-name" style={{color:"#8064A2"}}>Shubha Nagarajan</h4> 
                <p className="dancer-role" style={{color:"#0096C8"}}>Classical Dancer</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
