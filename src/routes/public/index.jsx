import React from "react";
import Header from "../../helpers/Header";
import Navbar from "../../helpers/Navbar";
import Footer from "../../helpers/Footer";
import Brochure from "../../components/Brochure";
import Chatt from "../../helpers/Chatt";
import TogalNavbar from "../../helpers/TogalNavbar";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <TogalNavbar />
      <Navbar />
      <Chatt />
      {element}
      <Brochure />
      <Footer />
    </main>
  );
};

export default Public;
