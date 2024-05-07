import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.tsx";
import HomePage from "./Pages/HomePage.tsx";
import IntrafleetPage from "./Pages/IntrafleetPage.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/intrafleet" element={<IntrafleetPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
