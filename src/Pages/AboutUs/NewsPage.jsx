import React, { useState } from "react";
import "../../CSS/AboutUs/NewsPage.css";
import NewsCard from "../Components/NewsCard";
import { newsData } from "../../Data/NewsData";
import { useNavigate } from "react-router-dom";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const navigate = useNavigate();

  const years = [...new Set(newsData.map((item) => item.date.split("/")[2]))];

  const filteredNews = newsData.filter((item) => {
    const matchYear = yearFilter ? item.date.endsWith(yearFilter) : true;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchYear && matchSearch;
  });

  const handleCardClick = (news) => {
    navigate(`/News/${news.id}`);
  };

  return (
    <div className="news-page">
      <h2 className="title">Latest News</h2>
      <div className="news-header">
        <div className="filters">
          <input
            type="text"
            placeholder="Search news..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            onChange={(e) => setYearFilter(e.target.value)}
            value={yearFilter}
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="news-grid">
        {filteredNews.length ? (
          filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} onClick={handleCardClick} />
          ))
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
