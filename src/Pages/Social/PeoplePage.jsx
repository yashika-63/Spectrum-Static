import React, { useState } from "react";
import "../../CSS/AboutUs/NewsPage.css";
import NewsCard from "../Components/NewsCard";
import { useNavigate } from "react-router-dom";
import { peopleData } from "../../Data/NewsData";

const PeoplePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const navigate = useNavigate();

  const years = [...new Set(peopleData.map((item) => item.date.split("/")[2]))];

  const filteredPeople = peopleData.filter((item) => {
    const matchYear = yearFilter ? item.date.endsWith(yearFilter) : true;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchYear && matchSearch;
  });

  const handleCardClick = (peoples) => {
    navigate(`/Events/${peoples.id}`);
  };

  return (
    <div className="news-page">
      <h2 className="title">Latest Events</h2>
      <div className="news-header">
        <div className="filters">
          <input
            type="text"
            placeholder="Search Events..."
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
        {filteredPeople.length ? (
          filteredPeople.map((news) => (
            <NewsCard key={news.id} news={news} onClick={handleCardClick} />
          ))
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </div>
  );
};

export default PeoplePage;
