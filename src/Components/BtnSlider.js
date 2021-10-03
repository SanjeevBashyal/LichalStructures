import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {/* <img src={direction === "next" ? rightArrow : leftArrow} /> */}
      <i className={direction === "next" ? "fas fa-chevron-right fa-2x" : "fas fa-chevron-left fa-2x"}></i>
    </button>
  );
}
