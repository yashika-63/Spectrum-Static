import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "MCB",
    text: "Spectrum’s Miniature Circuit Breakers (MCB) deliver reliable protection against overloads and short circuits, ensuring safe and uninterrupted power for home and commercial spaces. These MCBs are your first line of defence in any electrical installation.",
  },
  {
    label: "Isolators",
    text: "Precision-built for safety and longevity, our isolators provide seamless disconnection and uncompromising performance even in the toughest electrical environments.",
  },
  {
    label: "RCCB",
    text: "Spectrum’s Residual Current Circuit Breakers (RCCB), designed for life protection, our RCCBs instantly detect earth leakage faults ensuring safety, reliability, and peace of mind in every installation that safeguards lives and property.",
  },
  {
    label: "RCBO",
    text: "Our RCBOs deliver dual protection combining overload and earth leakage safety in a compact design, ideal for modern electrical systems demanding maximum reliability.",
  },
  // {
  //   label: "MCCB",
  //   text: "Our Molded Case Circuit Breakers (MCCB) are built for high-performance environments, providing robust protection for heavy-duty industrial and commercial applications.",
  // },
  {
    label: "Distribution Boards",
    text: "We offer high-quality distribution boards designed to manage power seamlessly across multiple circuits. With advanced safety features to handle faults effectively, our boards provide the reliability and protection you can count on. Built to meet strict electrical standards and tailored to fit specific needs, our distribution boards ensure smooth operation for residential, commercial, or industrial applications.",
  },
  {
    label: "MCCB",
    text: "Comming Soon..."
  },
];

export default function ProtectionSwitchgear() {
  return (
    <div className="core-path">
      <h1 className="title">Low Voltage Switchgear</h1>
      <p className="core-para">
        We provide a complete range of low voltage switchgear MCBs, Isolators, 
        RCCBs, RCBOs and MCCBs along with high-quality distribution boards to ensure
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
