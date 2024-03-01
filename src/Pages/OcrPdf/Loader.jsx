import React from "react";
import "./loader.css"; // Import the CSS file

const WaveCircle = () => {
  const circleStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "blue",
    display: "inline-block",
    margin: "0 5px",
    animation: "waveAnimation 0.8s infinite",
  };

  const circleStyle1 = {
    ...circleStyle,
    animationDelay: "0.2s",
  };

  const circleStyle2 = {
    ...circleStyle,
    animationDelay: "0.4s",
  };

  const circleStyle3 = {
    ...circleStyle,
    animationDelay: "0.6s",
  };

  return (
    <div>
      Magical thinking
      <div style={circleStyle1}></div>
      <div style={circleStyle2}></div>
      <div style={circleStyle3}></div>
    </div>
  );
};

export default WaveCircle;
