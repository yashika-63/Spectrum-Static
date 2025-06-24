import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "MCB",
    text: "Spectrum’s Miniature Circuit Breakers (MCB) deliver reliable protection against overloads and short circuits, ensuring safe and uninterrupted power for your home and commercial spaces.",
  },
  {
    label: "MCCB",
    text: "Our Molded Case Circuit Breakers (MCCB) are built for high-performance environments, providing robust protection for heavy-duty industrial and commercial applications.",
  },
  {
    label: "RCCB",
    text: "With Spectrum’s Residual Current Circuit Breakers (RCCB), you get advanced fault detection technology that safeguards lives and property by preventing electric shocks and leakage currents.",
  },
  {
    label: "DB's",
    text: "We offer high-quality distribution boards designed to manage power seamlessly across multiple circuits. With advanced safety features to handle faults effectively, our boards provide the reliability and protection you can count on. Built to meet strict electrical standards and tailored to fit your specific needs, our distribution boards ensure smooth operation for residential, commercial, or industrial applications.",
  },
];

export default function ProtectionSwitchgear() {
  return (
    <div className="core-path">
      <h1 className="title">Distribution Boards</h1>
      <p className="core-para">
        At Spectrum, we provide a complete range of protection switchgear MCBs,
        MCCBs, and RCCBs along with high-quality distribution boards to ensure
        safe, efficient, and reliable electrical systems. Engineered to guard
        against overloads, short circuits, and other faults, our products meet
        stringent quality and compliance standards. Whether for residential,
        commercial, or industrial use, our solutions offer robust protection,
        seamless power distribution, and long-term performance you can trust.
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
