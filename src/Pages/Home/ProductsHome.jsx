import React, { useState, useEffect } from "react";
import "../../CSS/Home/ProductsHome.css";
import { productData } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

export default function MainLayout() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = (index) => {
    if (!isMobile && index !== activeIndex) {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsFading(false);
      }, 300);
    }
  };

  const handleClick = (index) => {
    if (isMobile) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  const handleLeave = () => {
    if (!isMobile) setActiveIndex(null);
  };

  const renderGridWithSubmenu = () => {
    const rows = [];
    for (let i = 0; i < productData.length; i += isMobile ? 2 : 3) {
      const row = productData.slice(i, i + (isMobile ? 2 : 3));
      rows.push(
        <div className="menu-row" key={`row-${i}`}>
          {row.map((product, idx) => {
            const globalIndex = i + idx;
            return (
              <div
                key={product.title}
                className="menu-item"
                onMouseEnter={() => handleHover(globalIndex)}
                onClick={() =>
                  isMobile ? handleClick(globalIndex) : navigate(product.link)
                }
              >
                {product.title}
              </div>
            );
          })}
        </div>
      );

      if (
        activeIndex !== null &&
        activeIndex >= i &&
        activeIndex < i + 3 &&
        productData[activeIndex]
      ) {
        const product = productData[activeIndex];
        rows.push(
          <div
            className={`submenu ${
              isFading && !isMobile ? "fade-out" : "fade-in"
            }`}
            key={`submenu-${i}`}
            onMouseLeave={handleLeave}
          >
            <div className="submenu-top">
              <div className="submenu-text">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
              <div className="submenu-button">
                <button
                  onClick={() => navigate(product.link)}
                  className="learn-more"
                >
                  LEARN MORE{" "}
                  <span className="right-arrow">
                    <FaAngleRight />
                  </span>
                </button>
              </div>
            </div>

            <div className="submenu-items">
              {product.subItems.map((item) => (
                <div key={item} className="submenu-link">
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

    return rows;
  };

  return (
    <div className="wrapper">
      <p className="title">Explore Our Products</p>
      <div className="container">
        <div className="hover-zone" onMouseLeave={handleLeave}>
          <div className="menu">{renderGridWithSubmenu()}</div>
        </div>
      </div>
    </div>
  );
}
