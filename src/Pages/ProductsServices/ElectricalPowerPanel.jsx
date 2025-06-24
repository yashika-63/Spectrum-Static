import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "Electrical Power Panels",
    text: "We help you manage and distribute electricity safely and efficiently with our advanced electrical power panels. From distribution boards to control panels and breaker panels, our solutions are designed to meet the needs of modern homes and businesses. With a strong focus on safety, reliability, and seamless connectivity, our panels are crafted to simplify energy management while adapting to your specific requirements. Let Spectrum provide the innovative, high-quality power panels you need to power your spaces with confidence and ease.",
  },
];

export default function ElectricalPowerPanel() {
  return (
    <div className="core-path">
      <h1 className="title">Electrical Power Panels</h1>
      <p className="core-para">
        Spectrum’s advanced electrical power panels ranging from distribution to control and breaker panels ensure safe, efficient energy management for modern homes and businesses. Built with a focus on reliability and adaptability, our panels deliver seamless connectivity and trusted performance tailored to your specific needs.
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
