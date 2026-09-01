import React from "react";
import Header from "../../helpers/Header";
import Navbar from "../../helpers/Navbar";
import Footer from "../../helpers/Footer";
import ActionButtons from "../../widgets/ActionButtons/ActionButtons";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <Navbar />
      {element}
      <ActionButtons />
      <Footer />
    </main>
  );
};

export default Public;
