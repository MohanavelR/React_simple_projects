import React from 'react'
import "./home.css"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className=' home-container text-white'>
      <h1 className='text-center '>Simple React Projectes</h1>
      <div className='div-container p-3 mt-3 justify-content-center align-items-center d-flex flex-wrap gap-4'>   
        <Link to="/profile-card" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-1">Profile Card</Link>
        <Link to="/QR-generator" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-2">QR-Generator</Link>
        <Link to="/userform" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-3">User Form</Link>
        <Link to="/advice-app" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-4">Advices App</Link>
        <Link to="/weather-app" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-5">Weather App</Link>
        <Link to="/bmi-calculator" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-6">BMI Calculator</Link>
        <Link to="/currency-convetor" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-7">Currency Convertor</Link>
        <Link to="/digital-clock" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-8">Digital Clock</Link>
        <Link to="/generate-password" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-9">Password Generator</Link>
        <Link to="/faqs" className="bg-primary col-md-4 col-12 p-4 text-center text-white rounded box box-10">FAQs</Link>
      </div>
    </div>
  )
}

export default Home
