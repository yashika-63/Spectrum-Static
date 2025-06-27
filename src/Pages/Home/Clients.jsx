import React from "react";
import "../../CSS/Home/Clients.css";

const logos = [
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/19.png", //schneider
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/14.png", //Legrand
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/1.png", //ABB
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/17.png", //Panasonic
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/6.png", //Eaton
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/16.png", //Mitsubishi
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/7.png", //GM
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/11.png", //Honeywell
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/10.png", //Hitachi
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/9.png", //hager
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/13.png", //L&T
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/8.png", //GoldMedal
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/15.png", //Luminous
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/2.png", //Anchor by panasonic
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/4.png", //Bosch
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/20.png", //southco
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/12.png", //Jain
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/18.png", //Polycab
  "https://javajar1234.s3.ap-south-1.amazonaws.com/Spectrum+Electrical+Website+/Home/partners/21.png", //Time medical
];

export default function Clients() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-slider">
      <p className="title">Our Esteemed Clients</p>
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
