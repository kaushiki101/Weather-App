import React, { useEffect, useState } from "react";
import "./Tempapp.css";
import sun from "../Assets/sun.png";
import wind from "../Assets/wind.png";
import snow from "../Assets/snow.png";
// import clear from "../Assets/clear.png";
import rainy from "../Assets/rainy.png";
import cloud from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";

const Tempapp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Japan");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cb2c4b1e584528fc98cf5a27a4539d2e`;
      const respnse = await fetch(url);
      const resjson = await respnse.json();
      setCity(resjson.main);
    };
    fetchapi();
  }, [search]);

  const handleLocationChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="Head">WEATHER APP</h1>
      <div className="top-bar">
        <div className="search-icon">
          <input
            type="search"
            className="button"
            onChange={handleLocationChange}
            value={search}
          />
        </div>

        {!city ? (
          <button className="ERROR">ENTER SOME DATA</button>
        ) : (
          <div className="small-div">
            <div className="weather-image">
              <img src={rainy} alt="rainy" />
            </div>
            <div className=""></div>
            <h3 className="location">{search}</h3>
            <h3 className="temp"> tempertaure {city.temp} </h3>
            <div className="data">
              <div className="element">
                <div className="humdidty">
                  <p>Humidity: {city.humidity}%</p>
                  <img src={humidity} alt=" humidity" />
                </div>
              </div>

              <div className="element">
                <div className="wind">
                  <p>Wind:{city.wind && console.log(city.wind)}</p>
                  <img src={wind} alt="wind" />
                </div>
              </div>
            </div>

            <br></br>
            <button className="temper">
              {" "}
              <h1>{city.temp_min}</h1>
              MIN TEMP{" "}
            </button>
            <button className="temper">
              <h1>{city.temp_max}</h1>
              MAX TEMP{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tempapp;
