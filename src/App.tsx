import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
