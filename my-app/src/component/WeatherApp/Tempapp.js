import React, { useEffect, useState } from "react";
import "./Tempapp.css";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";
import Temperature from "../Assets/temperature.png";
import sunset from "../Assets/sunset.png";

const Tempapp = () => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("null");
  const [search, setSearch] = useState("Japan");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cb2c4b1e584528fc98cf5a27a4539d2e`;
      const respnse = await fetch(url);
      const resjson = await respnse.json();
      setCity(resjson);
    };
    fetchapi();
  }, [cityName]);

  const handleLocationChange = (e) => {
    setSearch(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      setCityName(search);
    }
  };

  // if (city) {
  //   console.log(city);
  // }

  return (
    <div className="container">
      <div className="sunset">
        <img
          src={sunset}
          alt="sunset"
          style={{
            width: "675px",
            height: "830px",
            borderRadius: "10px",
          }}
        />
      </div>
      <h1 className="Head">WEATHER APP</h1>
      <div className="top-bar">
        <div className="search-icon">
          <input
            type="search"
            className="button"
            onChange={handleLocationChange}
            value={search}
            onKeyDown={handleEnter}
            placeholder="Search"
          />
        </div>

        {!city ? (
          <button className="ERROR">ENTER SOME DATA</button>
        ) : (
          <div className="small-div">
            <div className="weather-image">
              <div className="element">
                <h3 className="Main">
                  <div>{city.weather[0].main}</div>
                </h3>
              </div>

              <img
                src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                alt={city.weather[0].description}
              />
            </div>
            <div className="location">{search}</div>
            <div className="element-1">
              <h3 className="temp">Tempertaure:</h3>
              <div> {city.main.temp}°F</div>
              <img src={Temperature} alt=" Temperature" />
            </div>
            <div className="data">
              <button className="temper">
                {" "}
                <h1>{city.main.temp_min}</h1>
                MIN TEMP{" "}
              </button>
              <div className="element">
                <h3 className="Main"> Humidity:</h3>
                <div> {city.main.humidity}%</div>
                <img src={humidity} alt=" humidity" />
              </div>
              <div className="element">
                <h3 className="Main">Description:</h3>
                <div>{city.weather[0].description}</div>
              </div>
              <div className="element">
                <h3 className="Main">Wind:</h3>
                <div>{city.wind.speed}km/h</div>
                <img src={wind} alt="wind" />
              </div>

              <button className="temper">
                <h1>{city.main.temp_max}</h1>
                MAX TEMP{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tempapp;
