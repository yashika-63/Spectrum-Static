import React from "react";
import "../../CSS/AboutUs/CorePath.css";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "MRI Machine",
    text: "Spectrum Electrical Industries Limited, in collaboration with Fischer Chemic Limited, provides co-development, manufacturing, sourcing and supply of MRI machine components.",
  },
];

export default function HealthTech() {
    const navigate = useNavigate();

    return (
    <div className="core-path">
      <button onClick={() => navigate('/')} className="read-more" style={{ marginTop: "20px", marginLeft: "50px" }}>
        ← Back
      </button>
      <h1 className="title">HealthTech</h1>
      {/* <p className="core-para">
        Our advanced MRI systems are designed to deliver crystal-clear images,
        enabling healthcare professionals to diagnose and confidently provide
        timely and accurate care.
      </p> */}

      <div className="core-services">
        {items.map((item, index) => (
          <div className="core-block-services" key={index}>
            <div className="title-section">
              <span className="our-black">{item.label}</span>
              {/* <span className="label-red"> {item.label}</span> */}
            </div>

            <div className="indicator-wrapper">
              <div className="line black-line"></div>
              <div className="dot red-dot"></div>
              <div className="line black-line"></div>
            </div>

            <p className="description">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
