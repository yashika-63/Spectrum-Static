import { FaTimes } from "react-icons/fa";
import '../../CSS/ComponentsCSS/News.css';
import '../../CSS/AboutUs/Careers.css'

const CareerModal = ({ title, content, buttonText, onClose, onNext }) => {
  const bulletPoints = content.split('. ').filter(Boolean);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <FaTimes className="close-icon" onClick={onClose} />
        <h2>{title}</h2>
        <ul className="modal-content">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point.trim()}.</li>
          ))}
        </ul>
        <div className="modal-buttons">
          {onNext && <button onClick={onNext} className="read-more">{buttonText}</button>}
        </div>
      </div>
    </div>
  );
};

export default CareerModal;
