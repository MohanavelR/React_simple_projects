import React, { useEffect, useState } from 'react'
import './Clock.css'
export const Clock = () => {
    const [Time,setTime]=useState({hours:0,mintues:0,seconds:0,year:'',date:'',day:'',month:''})
    function Digital_Clock(){
        let cur_Dates=new Date();
        let min=cur_Dates.getMinutes()
        let hour=cur_Dates.getHours()
        let sec=cur_Dates.getSeconds()
        let year=cur_Dates.getFullYear()
        let date=cur_Dates.toLocaleDateString(undefined,{day:'numeric'})
        let day=cur_Dates.toLocaleDateString(undefined,{weekday:'long'})
        let month=cur_Dates.toLocaleDateString(undefined,{month:"short"})
        // console.log(cur_Dates.toLocaleDateString(undefined,{month:'short'}))
        if(hour>12){
            hour-=12
        }
        setTime({...Time,hours:convert(hour),mintues:convert(min),seconds:convert(sec),date:convert(date),day:day,month:month,year:year})
    }
    function convert(e){
        if(e<10){
            return '0'+e
        }
        else{
            return e
        }
    }
    useEffect(()=>{
       let clean= setInterval(Digital_Clock())
       return ()=>clearInterval(clean)
    })
  return (
    <>
    <div className=' main-clock-container d-flex justify-content-center align-items-center'>
          <div className='text-center col-12 col-md-6  p-5 bg-white rounded clock-container '>
           <h1 className='head'>Digital Clock</h1>
           <div className='d-flex mt-3 time justify-content-center align-items-center gap-1'>
           <span>{Time.hours}</span> : <span>{Time.mintues}</span> : <span>{Time.seconds}</span>
           </div>
           <div className='d-flex mt-3 date  justify-content-center align-items-center gap-3'>
            <span>{Time.day}</span>,<span>{Time.month}</span><span>{Time.date}</span> <span>{Time.year}</span>
           </div>
          </div>
    </div>
    </>
  )
}
