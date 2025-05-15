import React from "react";
import Header from "../../helpers/Header";
import Navbar from "../../helpers/Navbar";
import Footer from "../../helpers/Footer";
import Brochure from "../../components/Brochure";
import Chatt from "../../helpers/Chatt";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <Navbar />
      <Chatt />
      {element}
      <Brochure />
      <Footer />
    </main>
  );
};

export default Public;
