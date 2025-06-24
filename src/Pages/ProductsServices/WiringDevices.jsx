import React from "react";
import "../../CSS/AboutUs/CorePath.css";

const items = [
  {
    label: "Switches",
    text: "Our switches are engineered for seamless performance, combining safety, style, and ease of use. Designed with durable materials and precise mechanisms, they ensure reliable operation over time. Whether for home or commercial spaces, our switches complement any interior while delivering dependable control. Choose from a variety of designs to match your aesthetic and functional needs.",
  },
  {
    label: "Outlets",
    text: "Enhance your ambiance with our range of dimmers that offer smooth lighting control at your fingertips. Built for efficiency and comfort, they help you adjust brightness levels effortlessly to suit any setting. Our dimmers are compatible with various lighting types and are crafted to ensure safety and durability. They’re the perfect solution for energy savings and personalized lighting experiences.",
  },
  {
    label: "Dimmers",
    text: "Our outlets are designed to provide safe and stable power access wherever you need it. Constructed using high-quality components, they resist wear and deliver consistent performance. From standard to specialty configurations, our outlets support both residential and commercial power needs. Experience peace of mind with tamper-resistant and long-lasting solutions that prioritize safety and convenience.",
  },
];

export default function WiringDevices() {
  return (
    <div className="core-path">
      <h1 className="title">Wiring Devices</h1>
      <p className="core-para">
        We provide a wide range of wiring devices, including switches, outlets,
        and dimmers, all designed with your safety, convenience, and durability
        in mind. Made with high-quality materials and precision assembly, our
        products deliver reliable performance you can trust. Whether for
        residential or commercial use, our wiring devices meet the highest
        standards, ensuring ease of use and long-lasting quality. Let us help
        you power your spaces with solutions built to perform flawlessly.
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
