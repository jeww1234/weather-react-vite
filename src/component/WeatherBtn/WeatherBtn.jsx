import React from "react";
import Button from 'react-bootstrap/Button';
import "./WeatherBtn.style.css";

const WeatherBtn = () => {
  return (
    <div className="weather-btn">
      <Button variant="warning">Current</Button>
      <Button variant="warning">Paris</Button>
      <Button variant="warning">New York</Button>
      <Button variant="warning">Tokyo</Button>
    </div>
  );
};

export default WeatherBtn;
