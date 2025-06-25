import React from "react";
import { leadershipData } from "../../Data/LeadershipData";
import "../../CSS/AboutUs/Leadership.css";

export default function Leadership() {
  return (
    <div className="leadership-container">
      <h2 className="title">Leadership & Management</h2>
      <div className="grid-container">
        {leadershipData.map((person, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="card-photo-full"
                />
                <div className="card-info">
                  <h3>{person.name}</h3>
                  <p>{person.title}</p>
                  <h2 className="email-link">{person.email}</h2>
                </div>
              </div>
              <div className="card-back">
                <p>{person.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
