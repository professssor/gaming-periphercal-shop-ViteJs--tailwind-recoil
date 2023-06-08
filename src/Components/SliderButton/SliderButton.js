import React, { useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";
import "./Sliderbutton.css";

import graphicCard from "../../assets/graphicCard.mp4";
import pc from "../../assets/accessories.webp";
import pc2 from "../../assets/pc2.jpg";

const SliderButton = () => {
  // the links for all the assets being rendered
  const videoUrl = graphicCard;
  const image1Url = pc;
  const image2Url = pc2;
  // the state variable for the current slide functionality
  const [currentSlide, setCurrentSlide] = useState(0);
  // handle back click
  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(2)
      : setCurrentSlide((prev) => prev - 1);
  };
  // handle next click
  const nextSlide = () => {
    currentSlide === 2
      ? setCurrentSlide(0)
      : setCurrentSlide((prev) => prev + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      const headerMessage = document.getElementById("header-message");
      if (headerMessage) {
        headerMessage.style.opacity = 1;
      }
    }, 2000);
  }, []);

  return (
    <div style={{ width: "300vw" }}>
      {/* <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%,-15%)",

          background: "none",
          color: "#df2e38",
        }}
      ></div> */}

      <div className="slider-container">
        <div
          className="slide"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {" "}
          <video src={videoUrl} autoPlay={true} loop muted />
          <img src={image2Url} alt="Slider Image" />
          <img src={image1Url} alt="Slider Image" />
        </div>

        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%,-90%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div onClick={prevSlide} className="button-container">
            <WestOutlinedIcon />
          </div>
          <div onClick={nextSlide} className="button-container">
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderButton;
