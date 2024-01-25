import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/HobbyCard.css";
import people from "../images/people.png";
import product from "../images/product.png";
import place from "../images/place.png";
import program from "../images/program.png";

function HobbyCard() {
  return (
    <div className="cards-wrapper">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card" style={{ width: "608px", height: "297px" }}>
            <div className="card-body">
              <div className="card-heading">
                <img src={people} alt="img"/>
                <h5 className="card-title">People</h5>
              </div>

              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <a href="#" class="btn btn-primary btn-no-bg">Connect</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card" style={{ width: "608px", height: "297px" }}>
            <div className="card-body">
            <div className="card-heading">
                <img src={place} alt="img"/>
                <h5 className="card-title">Place</h5>
              </div>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <a href="#" class="btn btn-primary btn-no-bg">Meet up</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card" style={{ width: "608px", height: "297px" }}>
            <div className="card-body">
            <div className="card-heading">
                <img src={product} alt="img"/>
                <h5 className="card-title">Product</h5>
              </div>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <a href="#" class="btn btn-primary btn-no-bg">Get it</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card" style={{ width: "608px", height: "297px" }}>
            <div className="card-body">
            <div className="card-heading">
                <img src={program} alt="img"/>
                <h5 className="card-title">Program</h5>
              </div>
              <p className="card-text">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <a href="#" class="btn btn-primary btn-no-bg">Attend</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;
