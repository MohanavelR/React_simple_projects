import React from 'react'
import './Css.css'
import { FAQS_create } from './FAQS_create'
export const FAQS = () => {
  

  return (
    <div className='main-faqs-container text-white gap-3 d-flex col-12 flex-column align-items-center '>
      <h1 className='my-3'>FAQS</h1>
            <FAQS_create/>
            <FAQS_create/>
            <FAQS_create/>
            <FAQS_create/>
    </div>
  )
}
