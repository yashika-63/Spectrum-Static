import React, { useState } from "react";
import { investorData } from "../../Data/InvestorData";
import "../../CSS/Investor/InvestorRelation.css";
import { FaDownload, FaEye } from "react-icons/fa";

const IRSidebarLayout = () => {
  const categories = Object.keys(investorData.categories);

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    Object.keys(investorData.categories[activeCategory])[0]
  );
  const [selectedYear, setSelectedYear] = useState(investorData.years[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const subs = Object.keys(investorData.categories[category]);
    setActiveSubcategory(subs[0]);
  };

  const files =
    investorData.categories[activeCategory]?.[activeSubcategory]?.[
      selectedYear
    ] || [];

  return (
    <div className="ir-layout">
      <aside className="sidebar">
        {categories.map((cat) => (
          <div key={cat} className="category">
            <h3
              onClick={() => handleCategoryClick(cat)}
              className={cat === activeCategory ? "active" : ""}
            >
              {cat}
            </h3>
            {cat === activeCategory && (
              <ul className="subcategories">
                {Object.keys(investorData.categories[cat]).map((sub) => (
                  <li
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={sub === activeSubcategory ? "active" : ""}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>

      <main className="content">
        <div className="title-bar">
          <p className="sub-title">
            {/* {activeCategory} - {activeSubcategory} */}
            {activeSubcategory}
          </p>
          <div>
            <label>Select Year: </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="year-select"
            >
              {investorData.years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <ul className="pdf-list">
          {files.length ? (
            files.map((fileObj, idx) => {
              const { label, url } = fileObj;
              return (
                <li key={idx} className="pdf-item">
                  <span>{label}</span>
                  <div className="pdf-actions">
                    <a href={url} target="_blank" rel="noreferrer" className="list-icon">
                      <FaEye />
                    </a>
                    <a href={url} download className="list-icon" target="_blank" rel="noreferrer">
                      <FaDownload />
                    </a>
                  </div>
                </li>
              );
            })
          ) : (
            <li>No documents available</li>
          )}
        </ul>
      </main>
    </div>
  );
};

export default IRSidebarLayout;
