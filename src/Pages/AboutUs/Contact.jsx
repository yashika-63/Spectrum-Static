import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../../CSS/AboutUs/Contact.css";
import "../../CSS/AboutUs/CorePath.css";

const Contact = () => {
  return (
    <div className="contact-layout">
      <div className="contact-details-row">
        <h1 className="title">Contact details</h1>
        <div className="contact-details">
          <div className="contact-details-item">
            <h2>Contact No.</h2>
            <div className="line-dot-line">
              <span className="line" />
              <span className="dot" />
              <span className="line" />
            </div>
            <p>(+91) 0257-2210192</p>
            <p>+91 8591061753</p>
          </div>
          <a
            className="contact-details-item"
            href="mailto:info@spectrum-india.com"
          >
            <h2>Email ID</h2>
            <div className="line-dot-line">
              <span className="line" />
              <span className="dot" />
              <span className="line" />
            </div>
            <p>info@spectrum-india.com</p>
          </a>
          <div className="contact-details-item">
            <h2>Contact Person</h2>
            <div className="line-dot-line">
              <span className="line" />
              <span className="dot" />
              <span className="line" />
            </div>
            <p>(Investor Grievance Redressal)</p>
            <p>Mr. Rahul Lavane</p>
            <p>(Company Secretary)</p>
            <p>Email: info@spectrum-india.com</p>
          </div>
        </div>
      </div>

      <div className="offices-row">
        <a
          className="office-block"
          href="https://www.google.com/maps?q=Gat+No.+139/1+and+139/2,+Umala,+Jalgaon,+Maharashtra+425003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Registered Office</h2>
          <div className="line-dot-line">
            <span className="line" />
            <span className="dot" />
            <span className="line" />
          </div>
          <p>Spectrum Electrical Industries Ltd.</p>
          <p>Gat No. 139/1 and 139/2, Umala, Jalgaon,</p>
          <p>Maharashtra - 425003, India.</p>
          <p>CIN: L28100MH2008PLC185764</p>
          <p>GST No.: 27AAUCS2152E1Z7</p>
        </a>

        <a
          className="office-block"
          href="https://www.google.com/maps?q=Omega+House,+Hiranandani+Gardens,+Powai,+Mumbai,+Maharashtra+400076"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Corporate Office</h2>
          <div className="line-dot-line">
            <span className="line" />
            <span className="dot" />
            <span className="line" />
          </div>
          <p>Spectrum Electrical Industries Ltd.</p>
          <p>5th Floor, Omega House,</p>
          <p>Hiranandani Gardens, Powai,</p>
          <p>Mumbai, Maharashtra - 400076, India</p>
        </a>

        <div className="office-block">
          <h2>Registrar and Transfer Agent</h2>
          <div className="line-dot-line">
            <span className="line" />
            <span className="dot" />
            <span className="line" />
          </div>
          <p>Bigshare Services Private Limited</p>
          <p>Office No. S6-2, 6th Floor, Pinnacle Business Park,</p>
          <p>Next to Ahura Centre, Andheri (East)</p>
          <p>Mumbai - 400093, India</p>
          <p>Tel: +91-022-62638200</p>
          <p>Email: info@bigshareonline.com</p>
          <p>CIN: U99999MH1994PTC076534</p>
        </div>
      </div>

      <div className="manufacturing-section">
        <div className="manufacturing-section">
          <h1 className="title">Manufacturing Presence</h1>
          <div className="locations">
            <a
              className="location-item"
              href="https://maps.app.goo.gl/fC3VXYqH7SoYCd959"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="icon" />
              <span>Jalgaon</span>
            </a>

            <a
              className="location-item"
              href="https://maps.app.goo.gl/VDoneFDRthEpZ9Rm6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="icon" />
              <span>Nashik</span>
            </a>

            <a
              className="location-item"
              href="https://maps.app.goo.gl/hybsZjt5SQywH1Xq5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="icon" />
              <span>Bengaluru</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
