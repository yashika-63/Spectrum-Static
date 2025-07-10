import React, { useState } from "react";
import "../../CSS/Home/ExploreSection.css";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tabs = [ "Careers", "Investor Relations", "Client"];

const tabContent = {
  Careers: {
    heading: "Be part of a team that builds a better world",
    text: "Spectrum Electrical is where ideas spark, innovation thrives and careers are built. We design and deliver cutting edge electrical components that powers industries and improve lives. Join us in building a smarter, more connected tomorrow.",
    buttonText: "VIEW OPEN POSITIONS",
    route: "/Careers"
  },
  'Investor Relations': {
    heading: "Building trust and transparency in creating value",
    text: "We prioritize transparent communication and trust-building with our investors. Providing Financial and Non-financial data enhancing long-term credibility with the investment community. We are committed to create unparalleled value at every step of the way, fostering a strong partnership that lives for generations to come.",
    buttonText: "EXPLORE INVESTOR INFO",
    route: "/InvestorRelations"
  },
  Client: {
    heading: "Get in Touch",
    text: "Are you looking for a strategic partner to create innovative products and achieve manufacturing excellence by adopting technological and engeenering advances? You are at the right place. We have end-to-end supply chain integration with capabilities from drawing room product design to packaging and delivery.",
    buttonText: "CONTACT US",
    route: "/ContactUs"
  }
};

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState("Careers");
  const content = tabContent[activeTab];
    const navigate = useNavigate();

  return (
    <div className="tabs-container">
      <p className="title">Connecting with Spectrum</p>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="left">
          <h2>{content.heading}</h2>
          <p>{content.text}</p>
        </div>
        <div className="right">
          <button className="learn-more" onClick={() => navigate(content.route)}>{content.buttonText} <span className="right-arrow"><FaAngleRight /></span></button>
        </div>
      </div>
    </div>
  );
}
