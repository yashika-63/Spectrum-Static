import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "EV Chargers",
    text: "We’re dedicated to powering the future of electric mobility with reliable and accessible EV charging solutions. Our range includes AC chargers designed for homes and destination charging, and we’re exploring DC fast chargers to meet the demands of rapid public charging. We focus on creating chargers that are efficient, durable, and easy to use, ensuring a seamless experience for EV owners.",
  },
];

export default function EVChargers() {
  return (
    <div className="core-path">
      <h1 className="title">Electrical Power Panels</h1>
      <p className="core-para">
        Spectrum powers the future of electric mobility with reliable, user-friendly EV charging solutions, including efficient AC chargers for homes and destinations. With a focus on durability and innovation, we’re advancing toward DC fast charging to support seamless, sustainable transportation for all.
      </p>

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
