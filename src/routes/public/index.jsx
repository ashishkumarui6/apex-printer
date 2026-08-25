import React from "react";
import Header from "../../helpers/Header";
import Navbar from "../../helpers/Navbar";
import Footer from "../../helpers/Footer";
import TogalNavbar from "../../helpers/TogalNavbar";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <TogalNavbar />
      <Navbar />
      {element}
      <Footer />
    </main>
  );
};

export default Public;
