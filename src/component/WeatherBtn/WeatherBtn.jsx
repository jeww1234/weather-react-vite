import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./WeatherBtn.style.css";

const WeatherBtn = ({ city, setCity, cities, getCurrentLocation }) => {
  const [current, setCurrent] = useState("Current")

  return (
    <div className="weather-btn">
      <Button
        variant={current === "Current" && city === "" ? "dark" : "warning"}
        onClick={() => {
          getCurrentLocation();
          setCurrent("Current")
          setCity("")
        }}
      >
        Current
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={city === item ? "dark" : "warning"}
          key={index}
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherBtn;
