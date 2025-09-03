import React, { useState } from 'react'
import './Css.css'
export const FAQS_create = () => {
   const[hide,setHide]=useState(false)
  return (
    <div className='faqs-container col-10 mt-3 '>
        <div onClick={()=>setHide(!hide)} className='question rounded bg-primary p-2'>
            <p>Simple Questions ? </p>
        </div>
        <div className={`answer bg-white rounded ${hide?'answer-show':'answer-hide'}`}>
            <p className='text-dark'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum temporibus sunt nihil tempore nam minus placeat deleniti reprehenderit esse.</p>
        </div>
    </div>
  )
}
