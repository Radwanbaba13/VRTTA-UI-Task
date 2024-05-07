import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import statistics from "../Static/statistics.png";
import "./IntrafleetPage.css";

const IntrafleetPage = () => {
  const [showData, setShowData] = useState({
    id: 1,
    asset: "Asset1",
    economy: 20,
    distance: 100,
    idling: 10,
    make: "Toyota",
    year: 2018,
  });

  const colorMap = [
    { number: "101", color: "ffead0" },
    { number: "102", color: "f5fcd1" },
    { number: "103", color: "dbfad2" },
    { number: "104", color: "d4f7e0" },
    { number: "105", color: "d5f4f3" },
    { number: "106", color: "d6e1f1" },
  ];

  const fetchData = (buttonNumber) => {
    const sampleData = [
      {
        id: 1,
        asset: "Asset1",
        economy: 20,
        distance: 100,
        idling: 10,
        make: "Toyota",
        year: 2018,
      },
      {
        id: 2,
        asset: "Asset2",
        economy: 22,
        distance: 120,
        idling: 12,
        make: "Honda",
        year: 2019,
      },
      {
        id: 3,
        asset: "Asset3",
        economy: 19,
        distance: 110,
        idling: 8,
        make: "Ford",
        year: 2020,
      },
    ];

    setShowData(sampleData[buttonNumber - 1]);
  };

  return (
    <div>
      <Navbar />
      <div className="intrafleet-container1">
        <div className="buttons-container">
          <button className="api-button" onClick={() => fetchData(1)}>
            Software 1
          </button>
          <button className="api-button" onClick={() => fetchData(2)}>
            Software 2
          </button>
          <button className="api-button" onClick={() => fetchData(3)}>
            Software 3
          </button>
        </div>
        <div className="date-form">
          <div className="date-fields">
            <div>
              <label className="date-label">Start Date</label>
              <input className="date-input" type="date" />
            </div>{" "}
            <div>
              <label className="date-label">End Date</label>
              <input className="date-input" type="date" />
            </div>
          </div>
          <div className="button-center">
            <button className="analyze-data-button">
              Analyze vehicle data
            </button>
          </div>
        </div>
      </div>
      <div className="intrafleet-container2">
        <img src={statistics} alt="statistics" className="statistics-image" />
        {showData && (
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Fuel economy</th>
                <th>Distance</th>
                <th>Idling</th>
                <th>Make</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{showData.asset}</td>
                <td>{showData.economy}</td>
                <td>{showData.distance}</td>
                <td>{showData.idling}</td>
                <td>{showData.make}</td>
                <td>{showData.year}</td>
              </tr>
              <tr>
                <td>{showData.asset}</td>
                <td>{showData.economy}</td>
                <td>{showData.distance}</td>
                <td>{showData.idling}</td>
                <td>{showData.make}</td>
                <td>{showData.year}</td>
              </tr>
              <tr>
                <td>{showData.asset}</td>
                <td>{showData.economy}</td>
                <td>{showData.distance}</td>
                <td>{showData.idling}</td>
                <td>{showData.make}</td>
                <td>{showData.year}</td>
              </tr>
              <tr>
                <td>{showData.asset}</td>
                <td>{showData.economy}</td>
                <td>{showData.distance}</td>
                <td>{showData.idling}</td>
                <td>{showData.make}</td>
                <td>{showData.year}</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className="asset-title">Assets</div>
        <div className="assets">
          {colorMap.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: `#${item.color}`,
                padding: "15px",
                height: "5%",
                width: "40px",
                marginRight: "100px",
              }}
            >
              {item.number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntrafleetPage;
