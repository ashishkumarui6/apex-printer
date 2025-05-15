import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Public from "./routes/public";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Public element={<Home />} />} />
    </Routes>
  );
};

export default App;
