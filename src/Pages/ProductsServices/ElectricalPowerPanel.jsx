import React from "react";
import "../../CSS/AboutUs/CorePath.css";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Electrical Power Panels",
    text: "Our main LT Panel/PCC Panel are engineered to provide a comprehensive solution for electrical distribution, featuring advanced electrical and mechanical interlocking arrangements along with an Auto-load management facility. These panels are ideal for managing heavy loads while ensuring safety and efficiency.",
  },
];

export default function ElectricalPowerPanel() {
    const navigate = useNavigate();

  return (
    <div className="core-path">
      <button onClick={() => navigate('/')} className="read-more" style={{ marginTop: "20px", marginLeft: "50px" }}>
        ← Back
      </button>
      <h1 className="title">Electrical Power Panels</h1>
      {/* <p className="core-para">
        Spectrum’s advanced electrical power panels ranging from distribution to control and breaker panels ensure safe, efficient energy management. Built with a focus on reliability and adaptability, our panels deliver seamless connectivity and trusted performance tailored to specific needs.
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
