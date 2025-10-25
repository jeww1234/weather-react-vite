import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { call_api } from "./utils/call_api";
import Weather from "./component/Weather/Weather";
import WeatherBtn from "./component/WeatherBtn/WeatherBtn";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "0b455b67f7ff2cd45dcccd33831a3728";

function App() {
  //날씨 정도에는 도시 섭시 화씨
  //5개의 버튼 현재 위치 4개는 다른 도시
  //도시버튼을 클릭하면 도시의 날시가 나온다
  //커런트 버튼을 클릭하면 현재 위치 기반의 날시가 나온다
  //데이터를 들고오는 동안 로딩 스피너

  const [weatherData, setWeatherData] = useState(null);
  const cities = ["Paris", "New York", "Tokyo", "Seoul"];
  const [city, setCity] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      console.log(url);
      let result = await call_api(url);
      console.log(result);
      setWeatherData(result);
    });
  };

  const getWeatherByCity = useCallback(async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    let result = await call_api(url);
    console.log("city data", result);
    setWeatherData(result);
  }, [city]);

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city, getWeatherByCity]);

  return (
    <div>
      <div className="container">
        <Weather weatherData={weatherData} />
        <WeatherBtn setCity={setCity} cities={cities} getCurrentLocation={getCurrentLocation}/>
      </div>
    </div>
  );
}

export default App;
