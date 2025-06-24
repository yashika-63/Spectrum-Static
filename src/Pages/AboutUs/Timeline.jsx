import React, { useEffect, useRef } from "react";
import "../../CSS/AboutUs/Timeline.css";

const history = {
  1994: "Spectrum started it's humble journey by providing electroplating service to selective clientele",
  1999: "Semi-automatic electroplating facility commences at Jalgaon.",
  2003: "Electroplating facility commences at Nashik.",
  2004: "Sheetmetal stamping and irrigation equipment facilities commence at Jalgaon.",
  2008: "Plastic Injection moulded products facility for electrical sector manufacturing.",
  2009: "Commercial tool room facility for product designing and tool manufacturing commences at Jalgaon.",
  2010: "Fully automatic electroplating facility for automobile and electrical sector commences at Nashik.",
  2012: "Sheet metal Fabrication facility commences at Nashik.",
  2014: "Precision stamping component manufacturing facility  commences at Jalgaon.",
  2017: "All group business operations integrated under single entity. Molding facility commences at Umala, Jalgaon.",
  2018: "Listing on NSE Emerge. State of the art Silver & Silver Graphite manufacturing facility commences at Umala, Jalgaon.",
  2021: "State of the art Distribution Board manufacturing facility commences at Umala, Jalgaon, Commences commercial production, plating and arc chute assembly line at Bengaluru facilities.",
  2023: "Added new business verticals EV Chargers & Electrical Control Panels.",
  2024: "We diversified into healthcare sector to produce medical equipments. We also diversified into IT Sectors.",
};

const Timeline = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = lineRef.current;
      const scrollTop = window.scrollY;
      const offsetTop = timeline.offsetTop;
      const height = timeline.offsetHeight;
      const progress = Math.min(
        ((scrollTop + window.innerHeight - offsetTop) / height) * 100,
        100
      );

      timeline.style.setProperty("--scroll-progress", `${progress}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="history-main">
      <h2 className="title">Spectrum's Growth Timeline</h2>
      <div className="timeline-container">
        <div className="timeline-line" ref={lineRef}></div>
        {Object.entries(history).map(([year, text], index) => (
          <div
            key={year}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="circle">{year}</div>
            <div className="content">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
