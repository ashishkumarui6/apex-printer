import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Public from "./routes/public";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Public element={<Home />} />} />
      <Route path="/about" element={<Public element={<About />} />} />
      <Route path="/services" element={<Public element={<Services />} />} />
      <Route path="/portfolio" element={<Public element={<Portfolio />} />} />
      <Route path="/blog" element={<Public element={<Blog />} />} />
      <Route path="/contact" element={<Public element={<Contact />} />} />
    </Routes>
  );
};

export default App;
