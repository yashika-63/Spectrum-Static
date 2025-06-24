import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaBriefcase,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import CareerModal from "../AboutUs/CareerModal";

const CareerCard = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [hover, setHover] = useState(false);

  const closeAll = () => {
    setShowApply(false);
    setShowDetails(false);
  };

  return (
    <>
      <div
        className="career-card"
        onClick={() => setShowDetails(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="career-info-row">
          <h3 className="career-title">{job.title}</h3>
          <div className="career-meta">
            <span>
              <FaMapMarkerAlt /> {job.location}
            </span>
            <span>
              <FaBuilding /> {job.department}
            </span>
            <span>
              <FaBriefcase /> {job.experience}
            </span>
          </div>
        </div>

        <div
          className={`arrow-button ${hover ? "hovered" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(true);
          }}
        >
          {hover ? <FaArrowRight /> : <FaChevronRight />}
        </div>
      </div>

      {showDetails && (
        <CareerModal
          title={job.title}
          content={job.responsibilities}
          buttonText="Apply Now"
          onClose={closeAll}
          onNext={() => {
            setShowDetails(false);
            setShowApply(true);
          }}
        />
      )}

      {showApply && (
        <CareerModal
          title="Apply for this position"
          content="Send us your resume at careers@spectrum-india.com"
          buttonText="Close"
          onClose={closeAll}
        />
      )}
    </>
  );
};

export default CareerCard;
