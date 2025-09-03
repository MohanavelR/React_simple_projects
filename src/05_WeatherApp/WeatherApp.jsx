// WeatherApp.jsx

import React, { useState } from "react";
import "./WeatherApp.css"
import windIcon from '../assets/icons/wind.png'
import sunIcon from '../assets/icons/sun.png'
import cloudIcon from '../assets/icons/cloud.png'
import rainIcon from '../assets/icons/cloud_Rain.png'
import humanityIcon from "../assets/icons/humanity.png"
import WeatherDetails from "./WeatherDetails";
const WeatherApp = () => {
  
  const[icon,setIcon]=useState(cloudIcon)
  const[temp,setTemp]=useState(0)
  const[city,setCity]=useState("")
  const[country,setCountry]=useState('')
  const[lat,setLat]=useState(0)
  const[log,setLog]=useState(0)
  const[human,setHuman]=useState(0)
  const[wind,setWind]=useState(0)
  const[search,setSearch]=useState('')
  const[error,setError]=useState(false)
  const[load,setLoad]=useState(false)
  const[cityNotFound,setCityNotFound]=useState(true)
  const [Server,setserver]=useState(false)

  // Fetching Api 
  const fetchWeather = async () => { 
    setLoad(true) 
    const apiKey = "8c6a2f2a6b6a338613b27c3e555179d4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
    try{
      let data= await fetch(url)
      if(!data.ok){
        setError(true)
        setCityNotFound(false)
      }
      else{
        let res=await data.json()
        setCity(res.name)
        setLat(res.coord.lat)
        setLog(res.coord.lon)
        setHuman(res.main.humidity)
        setTemp(res.main.temp)
        setCountry(res.sys.country)
        setWind(res.wind.speed)
        console.log(res)
      }
    }
 catch (e){
      setserver(true)
 }  
 finally{
  setLoad(false)
  setTimeout(()=>{
    setError(false)
    setCityNotFound(true)
    setserver(false)
  },2000)
 }
  };
 

 
  
  return (
    <>
      <div className=" weather-app-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-3 text-white">Weather App</h1>
        <div className="weather-app  rounded  px-5">
        
        <div className="d-flex col-12 mt-3 justify-content-center mb-1">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter city"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={fetchWeather} type="submit" className="btn btn-primary">
            Search <i className="bi bi-search"></i>
          </button>
        </div>

    {load && 
    <div className="d-flex col-12 align-items-center justify-content-center  mt-3">
    <div className="spinner-border text-primary text-center" role="status">
        <span className="visually-hidden text-center">Loading...</span>
    </div>
    </div>
    }
        {error &&
        <div className="alert alert-danger" role="alert">
          City Not Found
      </div>
    }
    {Server &&  <div className="alert alert-danger" role="alert">
          Server is Not Response
      </div> }
    {cityNotFound &&
    
    <WeatherDetails lat={lat} log={log} windvalue={wind} humanity={human} city={city} country={country} icons={icon} temp={temp} human={humanityIcon} wind={windIcon}/>
    }
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
