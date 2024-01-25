import React from "react";
import SignIn from "./SignIn";
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <div className="herosection">
      <div className="content-wrapper">
        <h2>
          Explore your <span className="hobby">hobby</span> or{" "}
          <span className="passion">passion</span>
        </h2>
        <p className="hero-para">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="hero-para">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </div>
      <div className="details-wrapper">
        <SignIn/>
      </div>
    </div>
  );
}

export default HeroSection;
