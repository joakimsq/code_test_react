import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";


const App = () => (
  <div className="app-container">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  </div>
);

export default App;
