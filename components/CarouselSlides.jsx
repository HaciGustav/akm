import useApiCalls from "@/hooks/useApiCalls";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlides = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { getAnnouncements } = useApiCalls();

  useEffect(() => {
    getAnnouncements().then((res) => setSlides(res));
  }, []);

  return (
    <Carousel
      style={{
        overflow: "hidden",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        background: "#000",
      }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {slides.map((slide, i) => (
        <Carousel.Item
          style={{
            height: "100%",
            overflow: "hidden",
          }}
          key={i}
        >
          <Box
            sx={{
              height: { xs: "40vh", sm: "50vh", md: "60vh", lg: "70vh" },
              width: "100%",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              bgcolor: "transparent",
            }}
          >
            <img
              style={{
                width: "auto",
                maxWidth: "100%",
                objectFit: "cover",

                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 18px 36px -18px inset",
              }}
              src={slide?.image}
            />
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlides;
