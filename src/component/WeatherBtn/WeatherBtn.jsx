import React from "react";
import Button from "react-bootstrap/Button";
import "./WeatherBtn.style.css";

const WeatherBtn = ({ setCity, cities, getCurrentLocation }) => {
  return (
    <div className="weather-btn">
      <Button variant="warning" onClick={()=>getCurrentLocation()}>
          Current
        </Button>
      {cities.map((item, index) => (
        <Button variant="warning" key={index} onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherBtn;
