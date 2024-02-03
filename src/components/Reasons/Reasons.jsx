import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import peta from "../../assets/peta.png";
import pedigree from "../../assets/pedigree.png";
import petco from "../../assets/petco.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <div className="left-i">
          <img src={image2} alt="img" />
        </div>
        <div className="right-i">
          <img src={image1} alt="img" />
          <div className="right-i-b">
            <img src={image3} alt="img" />
            <img src={image4} alt="img" />
          </div>
        </div>
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>Diverse Pet Choices</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Responsible Adoption Partnerships</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Detailed Pet Profiles </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> Supportive Adoption Community</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={peta} alt="" />
          <img src={pedigree} alt="" />
          <img src={petco} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
