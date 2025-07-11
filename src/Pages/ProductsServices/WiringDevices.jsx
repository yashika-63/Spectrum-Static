import React from "react";
import "../../CSS/AboutUs/CorePath.css";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Switches",
    text: "Our switches are engineered for seamless performance, combining safety, style and ease of use. Designed with durable materials and precise mechanisms, they ensure reliable operation over time exceeding by far minimum operations requirement. These switches are tested for over 200,000 (against 100,000) operations to exceed BIS standard requirement of 40,000 (against 20,000) operations. Either for home or commercial spaces, our switches complement any interior while delivering dependable control with variety of designs to match aesthetic and functional needs.",
  },
  {
    label: "Outlets",
    text: "Either it’s your cozy reading nook or the heart of your kitchen, our sockets complement your space with safe, stylish and hassle-free power solutions, Engineered with high-quality materials and precision components, our sockets combine robust protection, long-lasting durability and stylish design for every environment delivering reliable performance with built-in safety features. Our power outlets are crafted to handle daily demands so you stay connected, protected and in control.",
  },
  
  {
    label: "Fan Regulators",
    text: "Crafted with high-grade materials and engineered for energy-efficient performance, our fan regulators offer smooth control with precision, sleek style and sustained savings keeping comfort effortless and elegant making every breeze just right.",
  },
  {
    label: "Dimmers",
    text: "Transform every space with our premium dimmers designed for intuitive lighting control, energy efficiency and timeless style. Compatible with diverse lighting types, they deliver smooth brightness adjustment and lasting performance for a personalized ambiance that feels just right.",
  },
  {
    label: "Plates",
    text: "Engineered for elegance and built to last, our plates seamlessly complement switches and sockets with a precise fit and premium craftsmanship. Choose from an array of finishes sleek coloured glass, high gloss acrylic, various natural textures, or wood inspired designs each available in a variety of rich colours to match your space. Either you’re styling a minimalist studio, a luxurious lounge, or a contemporary commercial setting, our versatile plate collection delivers a perfect blend of design flexibility, durability and timeless appeal",
  },
];

export default function WiringDevices() {
    const navigate = useNavigate();

    return (
    <div className="core-path">
      <button onClick={() => navigate('/')} className="read-more" style={{ marginTop: "20px", marginLeft: "50px" }}>
        ← Back
      </button>
      <h1 className="title">Wiring Devices</h1>
      {/* <p className="core-para">
        We provide a wide range of wiring devices, including switches, outlets,
        and dimmers, all designed with safety, convenience and durability
        in mind. Made with high-quality materials and precision assembly, our
        products deliver reliable performance you can trust. Either for
        residential or commercial use, our wiring devices meet the highest
        standards, ensuring ease of use and long-lasting quality.
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
