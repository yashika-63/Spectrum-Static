import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { newsData } from "../../Data/NewsData";
import "../../CSS/ComponentsCSS/News.css";

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const news = newsData.find((item) => item.id === parseInt(id));

  if (!news) {
    return <p>News not found.</p>;
  }

  return (
    <div className="newsdetail-page">
      <button onClick={() => navigate(-1)} className="read-more" style={{ marginBottom: "20px" }}>
        ← Back
      </button>

      <h2 className="title">{news.title}</h2>
      {/* <div className="news-date" style={{ textAlign: "right" }}>{news.date}</div> */}

      <div className="divider">
        <div className="line" />
        <div className="dot" />
        <div className="line" />
      </div>

      <p className="news-description multi-column" style={{ whiteSpace: "pre-wrap" }}>
        {news.description}
      </p>
    </div>
  );
};

export default NewsDetails;
