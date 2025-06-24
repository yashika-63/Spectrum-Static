import React from "react";
import "../../CSS/Home/HeroSection.css";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div className="hero-container">
      <div className="overlay">
        <p className="hero-title">
          Spectrum - your partner for transformative solutions
        </p>
        <p className="hero-subtitle">
          Spectrum is commited to innovation in our product lines, integrating
          cutting-edge technologies and sustainable practices, meeting the
          evolving needs of our customers while driving industry standards
          forward.
          {/* We deliver success when we undertake responsibility from routine
          production to unchartered large scale projects. With decades of
          experience, state-of-the-art facilities and talented people, we
          relentlessly work to create stategic value for our clients. */}
        </p>
        <button className="learn-more" onClick={handleClick}>
          CONTACT US{" "}
          <span className="right-arrow">
            <FaAngleRight />
          </span>
        </button>
      </div>

      <div className="below-text">
        Spectrum delivers ethical excellence, advanced manufacturing, certified
        quality, and trusted partnerships - driving responsible, reliable
        solutions for lasting growth.
      </div>
    </div>
  );
};

export default HeroSection;
