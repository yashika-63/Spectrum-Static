import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "MRI Machine",
    text: "Healthcare should be accessible, affordable, and focused on the people it serves. That’s why we craft MRI machines that redefine precision, comfort, and reliability. Our advanced MRI systems are designed to deliver crystal-clear imaging, enabling healthcare professionals to diagnose and confidently provide timely and accurate care. Either you’re managing a bustling hospital, a specialized diagnostic center, or a cutting-edge research facility, our solutions are tailored to meet unique needs.",
  },
];

export default function HealthTech() {
  return (
    <div className="core-path">
      <h1 className="title">HealthTech</h1>
      <p className="core-para">
        Our advanced MRI systems are designed to deliver crystal-clear imaging,
        enabling healthcare professionals to diagnose and confidently provide
        timely and accurate care.
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
