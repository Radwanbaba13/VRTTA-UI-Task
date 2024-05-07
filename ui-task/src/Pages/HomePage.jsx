import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import truck from "../Static/truck.png";
import truck2 from "../Static/truck2.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="truckBg">
        <img className="truckImages" src={truck2} alt="truck" />
        <img className="truckImages" src={truck} alt="truck" />
      </div>
      <ul>
        <li className="infoContainer">
          This tool provides a comprehensive assessment of fleet operations in
          alignment with Natural Resources Canada’s Green Freight Program. Its
          purpose is to analyze and minimize greenhouse gas (GHG) emissions from
          fleets.
        </li>
        <li className="infoContainer">
          The tool examines fuel usage, calculates GHG emissions, identifies
          fuel-saving opportunities, evaluates retrofit equipment effectiveness,
          and conducts intra-fleet and inter-fleet comparisons.
        </li>
      </ul>
    </>
  );
};

export default HomePage;
