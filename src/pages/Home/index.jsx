import React from "react";
import MultiCarousel from "../../shared/Carousel";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import DealsCard from "../../components/DealsCard";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <MultiCarousel
        arrows={true}
        infinite={true}
        showDots={true}
        autoPlay={true}
        responsive={responsive}
        customLeftArrow={
          <button
            style={{
              position: "absolute",
              left: 15,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent", // changed here
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              zIndex: 2,
              cursor: "pointer",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <MdOutlineArrowBackIos size={30} />
          </button>
        }
        customRightArrow={
          <button
            style={{
              position: "absolute",
              right: 15,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent", // changed here
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <MdOutlineArrowForwardIos size={30} />
          </button>
        }
      >
        <div style={{ width: "100%", height: "400px", background: "red" }}>
          Item 1
        </div>
        <div style={{ width: "100%", height: "400px", background: "blue" }}>
          Item 2
        </div>
        <div style={{ width: "100%", height: "400px", background: "green" }}>
          Item 3
        </div>
        <div style={{ width: "100%", height: "400px", background: "yellow" }}>
          Item 4
        </div>
      </MultiCarousel>
      <DealsCard />
    </>
  );
};

export default Home;
