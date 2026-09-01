import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Public from "./routes/public";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TEAM from "./pages/TEAM";
import CAREER from "./pages/CAREER";
import FLEX from "./pages/FLEX";
import LED_SIGN from "./pages/LED_SIGN";
import BANNER from "./pages/BANNER";
import VINAYAL from "./pages/VINAYAL";
import STATIONERY from "./pages/STATIONERY";
import COMMING_SOON from "./pages/COMMING_SOON";
import NOTFOUND from "./components/NOTFOUND";
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
      <Route path="/team" element={<Public element={<TEAM />} />} />
      <Route path="/careers" element={<Public element={<CAREER />} />} />
      <Route path="/flex" element={<Public element={<FLEX />} />} />
      <Route path="/led" element={<Public element={<LED_SIGN />} />} />
      <Route path="/banner" element={<Public element={<BANNER />} />} />
      <Route path="/vinayal" element={<Public element={<VINAYAL />} />} />
      <Route
        path="/stationeryItems"
        element={<Public element={<STATIONERY />} />}
      />
      <Route
        path="/commigsoon"
        element={<Public element={<COMMING_SOON />} />}
      />
      <Route path="/*" element={<NOTFOUND />} />
    </Routes>
  );
};

export default App;
