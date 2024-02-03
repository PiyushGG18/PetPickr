import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="advertisement">
          <div></div>
          <span>Rescue Love. Connecting Hearts through Adoption.</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Discover </span>
            <span>Joy</span>
          </div>
          <div>
            <span>Adopt a Pet</span>
          </div>
          <div>
            <span>
              Welcome to PetPickr! Unite hearts and paws through joyful pet
              adoption. Begin your story of love and companionship. Start your
              journey with us today!
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>500+</span>
            <span>Happy Adoptions</span>
          </div>
          <div>
            <span>700+</span>
            <span>Pets Rescued</span>
          </div>
          <div>
            <span>95%</span>
            <span>Adoption Success</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="happy-rate">
          <img src={Heart} alt="heart png" />
          <span>Happy Families</span>
          <span>426</span>
        </div>

        <img src={hero_image} alt="hero_image" className="hero-image" />
        <img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        />

        <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Donations Recieved</span>
            <span>$143,689</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
