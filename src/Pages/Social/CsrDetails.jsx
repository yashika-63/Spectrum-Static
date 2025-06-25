import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/ComponentsCSS/News.css";
import { csrData } from "../../Data/NewsData";

const CsrDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const csrs = csrData.find((item) => item.id === parseInt(id));

  if (!csrs) {
    return <p>CSR not found.</p>;
  }

  return (
    <div className="newsdetail-page">
      <button onClick={() => navigate(-1)} className="read-more" style={{ marginBottom: "20px" }}>
        ← Back
      </button>

      <h2 className="title">{csrs.title}</h2>
      <div className="news-date" style={{ textAlign: "right" }}>{csrs.date}</div>

      <div className="divider">
        <div className="line" />
        <div className="dot" />
        <div className="line" />
      </div>

      <p className="news-description multi-column" style={{ whiteSpace: "pre-wrap" }}>
        {csrs.description}
      </p>
    </div>
  );
};

export default CsrDetails;
