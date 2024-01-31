import React from "react";
import "./Categories.css";
import { categoriesData } from "../../data/categoriesData";
import RightArrow from "../../assets/rightArrow.png"

function Categories() {
  return (
    <div className="categories" id="categories">
      <div className="categories-header">
        <span className="stroke-text">Explore various</span>
        <span>Categories</span>
        <span className="stroke-text">that you love</span>
      </div>

      <div className="categories-option">
        {categoriesData.map((category) => (
          <div className="option">
            {category.image}
            <span>{category.heading}</span>
                <span>{category.details}</span>
                <div className="explore">
                    <span>Explore</span>
                    <img src={RightArrow} alt="right" />
                </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
