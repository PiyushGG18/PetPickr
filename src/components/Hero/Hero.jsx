import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

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
            <span>500 +</span>
            <span>Happy Adoptions</span>
          </div>
          <div>
            <span>700 +</span>
            <span>Pets Rescued</span>
          </div>
          <div>
            <span>95 %</span>
            <span>Adoption Success</span>
          </div>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
}

export default Hero;
