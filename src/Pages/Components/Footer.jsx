import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "../../CSS/ComponentsCSS/Footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/* <img
            src="https://javajar1234.s3.ap-south-1.amazonaws.com/Pristine+IT+Website/Home/client+list/spectrum.png"
            alt="Spectrum Logo"
            className="footer-logo"
          /> */}
          <p className="tag-line">We Propel Your Growth</p>
          {/* <p className="sub-text">
            Spectrum deliver success when we undertake responsibility from
            routine production to unchartered large scale projects.
          </p> */}
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>OUR COMPANY</h4>
            <ul>
              <a href="/Awards">
                <li>Awards & Certifications</li>
              </a>
              <a href="/InvestorRelations">
                <li>Investor Relations</li>
              </a>
              <a href="/LeadershipTeam">
                <li>Leadership Team</li>
              </a>
              <a href="/CorePath">
                <li>Our Vision</li>
              </a>
              <a href="/Careers">
                <li>Careers</li>
              </a>
              {/* <a href="/History">
                <li>History</li>
              </a> */}
              <a href="/News">
                <li>News</li>
              </a>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SOCIAL</h4>
            <ul>
              <a href="/Sustainability">
                <li>Sustainability</li>
              </a>
              <a href="/Events">
                <li>Events</li>
              </a>
              <a href="/CSR">
                <li>CSR</li>
              </a>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONNECT WITH US</h4>
            <ul>
              <a href="/ContactUs">
                <li>Contact Us</li>
              </a>
            </ul>
            <div className="social-icons">
              {/* <a
                href="https://www.facebook.com/spectrumelectrical"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a> */}
              <a
                href="https://www.linkedin.com/company/spectrum-electrical-industries-limited/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              {/* <a
                href="https://x.com/SpectrumEIL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          ©2025 Copyright SPECTRUM ELECTRICAL INDUSTRIES LIMITED. All Rights
          Reserved.
        </p>
        <div className="website-link">
          <a href="PrivacyPolicy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>

        {/* <div className="website-link1">
          <p>
            <a
              href="https://pristine-code.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website developed and maintained by - Pristine IT Code
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
