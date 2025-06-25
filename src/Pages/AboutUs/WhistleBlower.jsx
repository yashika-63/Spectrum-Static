import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../CSS/AboutUs/WhistleBlower.css";
import "../../CSS/ComponentsCSS/News.css";
import "../../CSS/AboutUs/Careers.css";
import { toast } from 'react-toastify';

const WhistleBlower = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9kpksq5", // Replace with your service ID
        "template_4vgeu6s", // Replace with your template ID
        formRef.current,
        "tPxOhyNG-aW43zMib" // Replace with your public key
      )
      .then(
        () => {
          toast.success("Concern submitted successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to submit concern. Please try again.");
        }
      );
  };

  return (
    <div className="wb-main">
      <h2 className="title">Report a Concern</h2>
      <p>
        Your voice matters. Write in confidence directly to the promoter Mr.
        Deepak Chaudhari to report misconduct and unethical issues.
      </p>
      <div className="wb-container">
        <form className="wb-form" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <label className="wb-label">Date of Incident: </label>
          <input type="date" name="date" required max={new Date().toISOString().split("T")[0]}/>
          <select name="status" required>
            <option value="">Select Status</option>
            <option value="Occurred">Occurred</option>
            <option value="Ongoing">Ongoing</option>
          </select>
          <input
            type="text"
            name="location"
            placeholder="Where did the incident happen?"
            required
          />
          <input
            type="text"
            name="involvement"
            placeholder="Capacity of your involvement"
            required
          />
          <select name="concern_type" required>
            <option value="">Select Concern Type</option>
            <option value="Fraud">Fraud</option>
            <option value="Harassment">Harassment</option>
            <option value="Discrimination">Discrimination</option>
            <option value="Safety">Safety</option>
          </select>
          <textarea
            name="message"
            rows="5"
            placeholder="Describe your concern..."
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="read-more">
              {loading ? <span className="spinner"></span> : "Submit Concern"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WhistleBlower;
