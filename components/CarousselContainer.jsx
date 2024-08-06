import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
// import CarousselItem from "./CarousselItem";

const CarousselContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isopen, setIsopen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const xs = useMediaQuery("(max-width:500px)");
  const sm = useMediaQuery("(max-width:650px)");
  const md = useMediaQuery("(max-width:650px)");
  const lg = useMediaQuery("(max-width:650px)");

  const HEIGHT = "70vh";

  const slides = [
    "./assets/slides/1.jpg",
    "./assets/slides/2.jpg",
    "./assets/slides/3.jpg",
    "./assets/slides/1.jpg",
    "./assets/slides/3.jpg",
    "./assets/slides/2.jpg",
  ];
  const intervalDuration = 5000;
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseIn = (e) => {
    setIsHovered(true);
  };
  const handleMouseOut = (e) => {
    setIsHovered(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, intervalDuration);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, isHovered]);

  return (
    <div
      style={{ width: "100%", backgroundColor: "#000", position: "relative" }}
    >
      <div
        style={{
          height: HEIGHT,
          overflow: "hidden",
          position: "relative",
          margin: "0 auto",
          width: "100%",
        }}
        onClick={() => setIsopen(!isopen)}
      >
        <Box
          className="leftArrow"
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: "0",
            top: "0",
            bottom: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 10,
            width: "50px",
            cursor: "pointer",
            transition: "all 0.18s ease-in-out",
            "&:hover": { backgroundColor: "#ffffff55" },
          }}
        >
          <ArrowBackIosNewIcon color="#fff" />
        </Box>
        <Box
          className="rightArrow"
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: "0",
            top: "0",
            bottom: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            zIndex: 10,
            width: "50px",
            cursor: "pointer",
            transition: "all 0.18s ease-in-out",
            "&:hover": { backgroundColor: "#ffffff55" },
          }}
        >
          <ArrowForwardIosIcon color="inherit" />
        </Box>
        <div
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          className="carousel"
          style={{
            height: HEIGHT,
            width: `calc(${slides.length}*100vw)`,
            transition: "transform 0.5s ease-in-out",
            display: "flex",
            transform: `translateX(-${currentIndex * 100}vw)`,
            padding: 0,
          }}
        >
          {slides.map((image) => (
            <div
              style={{
                width: "100vw",

                padding: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#000",
              }}
            >
              <img style={{ height: "100%" }} src={image} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: `calc(1.3rem * ${slides.length})`,
          position: "absolute",
          bottom: 5,
          right: "50%",
          transform: "translateX(50%)",
          padding: "0",
        }}
      >
        {slides.map((img, index) => (
          <span
            onClick={() => setCurrentIndex(index)}
            style={{
              fontSize: "1.3rem",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            {currentIndex == index ? "◈" : "◇"}
          </span>
        ))}
      </div>
    </div>
  );
};
export default CarousselContainer;
