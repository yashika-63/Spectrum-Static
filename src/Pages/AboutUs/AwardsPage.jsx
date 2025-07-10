import React from "react";
import "../../CSS/AboutUs/Awards.css";
import awardsData from "../../Data/AwardsData";

const AwardsPage = () => {
  return (
    <div className="awards-page">
      <h2 className="title">Awards & Certifications</h2>
      <div className="awards-grid">
        {awardsData.map((award, index) => (
          <div className="award-card" key={index}>
            <div
              className="award-image"
              style={{ backgroundImage: `url(${award.image})` }}
            ></div>
            <div className="award-name">{award.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
