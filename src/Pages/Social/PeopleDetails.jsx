import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/ComponentsCSS/News.css";
import { peopleData } from "../../Data/NewsData";

const PeopleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const peoples = peopleData.find((item) => item.id === parseInt(id));

  if (!peoples) {
    return <p>Events not found.</p>;
  }

  return (
    <div className="newsdetail-page">
      <button onClick={() => navigate(-1)} className="read-more" style={{ marginBottom: "20px" }}>
        ← Back
      </button>

      <h2 className="title">{peoples.title}</h2>
      <div className="news-date" style={{ textAlign: "right" }}>{peoples.date}</div>

      <div className="divider">
        <div className="line" />
        <div className="dot" />
        <div className="line" />
      </div>

      <p className="news-description multi-column" style={{ whiteSpace: "pre-wrap" }}>
        {peoples.description}
      </p>
    </div>
  );
};

export default PeopleDetails;
