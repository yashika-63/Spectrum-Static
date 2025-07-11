import React from "react";
import "../../CSS/ComponentsCSS/News.css";

const NewsCard = ({ news, onClick }) => {
  const { title, date, description } = news;

  return (
    <div className="news-card" onClick={() => onClick(news)}>
      {/* <p className="news-date">{date}</p> */}
      <h3 className="news-title">{title}</h3>
      <p className="news-description-clamp">{description}</p>
      <button
        className="read-more"
        onClick={(e) => {
          e.stopPropagation();
          onClick(news);
        }}
      >
        Read More
      </button>
    </div>
  );
};

export default NewsCard;
