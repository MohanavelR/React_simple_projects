import React from 'react'

const WeatherDetails = ({ icons, temp,human,wind,lat, log, windvalue, humanity, city, country }) => {


return (
    <>
      <div className="main-container mb-4 text-white">
        <div className="img-div d-flex justify-content-center mt-1 ">
          <img src={icons} alt="" />
        </div>
        <div>
          <div className='mt-2 text-center gap-3 col-12'>
            <p className='h3'>{temp}&deg;C</p>
            <p className='h2 text-warning'>{city}</p>
            <p className='h3'>{country}</p>
          </div>
          <div className='d-flex justify-content-center gap-4 '>
            <div className='d-flex flex-column gap-3 align-items-center justify-content-center'>
              <span>Latitute
              </span>
              <span>{lat}</span>
            </div>
            <div className='d-flex flex-column gap-3 align-items-center justify-content-center'>
              <span>Longitute
              </span>
              <span>{log}</span>
            </div>
          </div>
          <div className='d-flex col-12 align-items-center justify-content-between mt-3'>

          <div className='human text-start'>
            <img src={human} alt="" />
            <p className='mt-1'>{humanity}%</p>
            <p className='mt-1'>Humanity</p>
          </div>
          <div className='wind ms-3 text-end'>
          <img src={wind} alt="" className='ms-5' />
            <p className='mt-1'>{windvalue} km/h</p>
            <p className='mt-1'>Wind Speend</p>  
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherDetails
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 8c6a2f2a6b6a338613b27c3e555179d4 &units=Metric