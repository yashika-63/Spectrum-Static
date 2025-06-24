import React from "react";
import "../../CSS/Home/Clients.css";

const logos = [
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/1.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/2.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/4.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/6.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/7.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/8.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/9.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/10.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/11.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/12.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/13.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/14.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/15.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/16.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/17.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/18.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/19.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/20.png",
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/21.png",
];

export default function Clients() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-slider">
      <p className="title">We work with</p>
      <div className="logo-track">
        {duplicatedLogos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`Brand logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
