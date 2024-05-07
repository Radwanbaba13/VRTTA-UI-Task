import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="notFoundContainer">
        <div className="notFoundError">404 - Not Found</div>
        <div className="notFoundText">
          The page you're looking has not been implemented.
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
