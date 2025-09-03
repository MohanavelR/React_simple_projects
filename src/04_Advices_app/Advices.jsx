import React from 'react'
import './Advices.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Advices = () => {
    const[advice,setAdvice]=useState("")
    const[count,setCount]=useState(0)
    async function Get_Advice(){
        try{
        let data=await fetch('https://api.adviceslip.com/advice');
        let res= await data.json()
        setAdvice(res.slip.advice)
        setCount(count+1) 
        }
        catch(error){
            setAdvice("Server Not Response Check Your  Internet ")
        }

    }
    useEffect(()=>{
        Get_Advice()
    },[])
    useEffect(() => {
         if(count>5){
            setAdvice('You Already getting 5 advice ')
            setCount(5)
         }
    }, [count])
  return (
    <>               
    <div className='advice-container text-white d-flex flex-column gap-3 justify-content-center align-items-center '>
    <div>
    <button onClick={Get_Advice} className='btn btn-success'>Get Advice</button>
    </div>
    {advice?<p className='p-2 bg-primary rounded text-center '>{advice}</p>:""}
  
    <p>You have read<span className='bg-dark p-1 m-1 rounded circle '>{count}</span> advices</p>
    </div>
    </>
  )
}

export default Advices
