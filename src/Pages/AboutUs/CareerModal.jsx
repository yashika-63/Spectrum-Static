import { FaTimes } from "react-icons/fa";
import "../../CSS/ComponentsCSS/News.css";
import "../../CSS/AboutUs/Careers.css";

const CareerModal = ({ title, content, buttonText, onClose, onNext }) => {
  const isPlainText = typeof content === "string" && !content.includes(". ");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaTimes className="close-icon" onClick={onClose} />
        <h2>{title}</h2>

        {isPlainText ? (
          <p className="modal-content">
            {content.includes("@") ? (
              <>
                Send us your resume at{" "} <br />
                <a
                  href="mailto:careers@spectrum-india.com"
                  className="mail-link"
                >
                  careers@spectrum-india.com
                </a>
              </>
            ) : (
              content
            )}
          </p>
        ) : (
          <ul className="modal-content">
            {content
              .split(". ")
              .filter(Boolean)
              .map((point, index) => (
                <li key={index}>{point.trim()}.</li>
              ))}
          </ul>
        )}

        <div className="modal-buttons">
          {onNext ? (
            <button onClick={onNext} className="read-more">
              {buttonText}
            </button>
          ) : (
            <button onClick={onClose} className="read-more">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerModal;
