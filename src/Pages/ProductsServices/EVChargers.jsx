import React from "react";
import "../../CSS/AboutUs/CorePath.css";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "EV Chargers",
    text: "Spectrum is an ultimate partner for cutting-edge EV charging station. We have DC EV Chargers ranging from 30kW to 120kW. It contains 30kW DC EV Charger with Single CCS2 Charging Connector, 60kW DC EV Charger with Dual CCS2 Charging Connector and 120kW DC EV Charger with Dual CCS2 Charging Connector. We are developing 180kW & 240kW.",
  },
];

export default function EVChargers() {
    const navigate = useNavigate();

  return (
    <div className="core-path">
      <button onClick={() => navigate('/')} className="read-more" style={{ marginTop: "20px", marginLeft: "50px" }}>
        ← Back
      </button>
      <h1 className="title">Electrical Power Panels</h1>
      {/* <p className="core-para">
        Spectrum powers the future of electric mobility with reliable, user-friendly EV charging solutions, including efficient AC chargers for homes and destinations. With a focus on durability and innovation, we’re advancing toward DC fast charging to support seamless, sustainable transportation for all.
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
