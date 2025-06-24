import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "Vision",
    text: "To build a sustainable and innovative future by delivering transformative solutions that empower industries, inspire progress and elevate lives.",
  },
  {
    label: "Mission",
    text: "To provide world-class solutions that drive excellence, foster long-term partnerships and create value through quality, ethical practices, and commitment to innovation and sustainability.",
  },
  {
    label: "Goal",
    text: "To be the trusted partner delivering sustainable, innovative solutions, exceeding expectations, and driving transformative progress.",
  },
];

const coreValues = [
  {
    title: "Ethical Practices",
    description:
      "Adherence to highest ethical standards in every aspect of the business.",
  },
  {
    title: "Innovation",
    description:
      "Tireless innovation drives every effort to anticipate and solve complex manufacturing challenges.",
  },
  {
    title: "Collaboration",
    description:
      "Every innovation and service delivery is driven by collaboration and synergy.",
  },
  {
    title: "Customer Centricity",
    description:
      "We prioritize our customers’ needs, delivering quality and value.",
  },
  {
    title: "Empathy",
    description: "Understand and meet the needs of the customers and partners.",
  },
  {
    title: "Sustainability",
    description: "We uphold sustainability with BRSR, CSR, and ESG principles.",
  },
  {
    title: "Respect",
    description: "We treat everyone with dignity and equality.",
  },
  {
    title: "Global Approach",
    description: "Our processes and services are standardized and consistent.",
  },
];

export default function CorePath() {
  return (
    <div className="core-path">
      <h1 className="title">Corepath</h1>
      <p className="core-para">
        At Spectrum, we build a sustainable and innovative future through
        transformative solutions. Guided by our mission and core values, we
        deliver excellence with integrity, innovation, and a global mindset
        empowering lasting partnerships and impactful growth.
      </p>

      <div className="core-container">
        {items.map((item, index) => (
          <div className="core-block-services" key={index}>
            <div className="title-section">
              <span className="our-black">Our &nbsp;</span>
              <span className="label-red"> {item.label}</span>
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

      <div className="core-values-section">
        <h2 className="title">Our Core Values</h2>
        <div className="core-values-grid">
          {coreValues.map((value, index) => (
            <div className="core-value-item" key={index}>
              <h3 className="value-title">{value.title}</h3>
              <div className="line-dot-line">
                <span className="line" />
                <span className="dot" />
                <span className="line" />
              </div>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
