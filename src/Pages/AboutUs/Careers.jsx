import "../../CSS/AboutUs/Careers.css";
import { jobs } from "../../Data/CareersData";
import CareerCard from "../Components/CareerCard";

const Careers = () => (
  <div className="careers-page">
    <h2 className="title">Careers at Spectrum</h2>
    {jobs.map((job) => (
      <CareerCard key={job.id} job={job} />
    ))}
  </div>
);

export default Careers;
