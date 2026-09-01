import React from "react";
import Header from "../../helpers/Header";
import Navbar from "../../helpers/Navbar";
import Footer from "../../helpers/Footer";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <Navbar />
      {element}
      <Footer />
    </main>
  );
};

export default Public;
