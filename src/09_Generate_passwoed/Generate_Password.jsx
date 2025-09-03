import React, { useEffect, useState } from 'react'
import './Generator.css'
export const Generate_Password = () => {
    const [password,Setpassword]=useState('')
    const [obj,setObj]=useState({count:0,upper:false,lower:false,number:false,special:false})
    const [message,setMessage]=useState(false)
    const [error,setError]=useState(false)
    const [error2,setError2]=useState(false)
    function Generate(){
  let lower='qwertyuiopasdfghjklzxcvbnm'
  let upper=lower.toUpperCase()
  let number='1234567890'
  let Speciel='@#$%&*+><?'
  let charactor=''
  if( obj.count &&( obj.upper || obj.lower || obj.number || obj.special)){

      if(obj.upper){
        charactor+=upper
        
      }
      if(obj.lower){
        charactor+=lower
        
      } 
      if(obj.number){
        charactor+=number
        
      } 
      if(obj.special){
        charactor+=Speciel
        
      }   
        let words=''
        for(let i=1;i<=obj.count;i++){
          let random=Math.floor(Math.random() * charactor.length)
          words+=charactor.charAt(random)
        }
        Setpassword(words)
  }
  else{
    setError2(true)
    setTimeout(()=>{
        setError2(false)
    },3000)
  }
}
function Copy(){
    if(password){
        navigator.clipboard.writeText(password)
        setMessage(true)
        setTimeout(()=>{
            setMessage(false)
        },3000)
    }
}
function Clear(){
    setObj({...obj, count:0,upper:false,lower:false,number:false,special:false})
    Setpassword('')
}

    return (
    <div className='password-main-container  flex-column d-flex justify-content-center align-items-center '>
        <h1 className='mb-5'>Password Generator </h1>
        <div className='password-container p-5 rounded col-7'>
       {message && 
       <div class="alert text-center alert-success " role="alert">
        Password Copied.
    </div>
       }
       {error2 && 
       <div class="alert text-center  alert-danger " role="alert">
        Please Choose Letter And Length.
    </div>
       }
        <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Password Length</label>
        <input value={obj.count} onChange={(e)=>setObj({...obj,count:e.target.value})}  type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>  
        <div className="mb-3 d-flex  gap-3">
        <input onChange={(e)=>setObj({...obj,lower:e.target.checked})} checked={obj.lower} type="checkbox" className="form" id="exampleFormControlInput2" placeholder="" />
        <label htmlFor="exampleFormControlInput2" className="form-label">Lower Character</label>
    </div> 
    <div className="mb-3 d-flex  gap-3">
        <input onChange={(e)=>setObj({...obj,upper:e.target.checked})} checked={obj.upper}  type="checkbox" className="form-checkbox" id="exampleFormControlInput3" placeholder="" />
        <label  htmlFor="exampleFormControlInput3" className="form-label">Upper Character </label>
    </div>   
    <div className="mb-3 d-flex  gap-3">
        <input onChange={(e)=>setObj({...obj,number:e.target.checked})} checked={obj.number}   type="checkbox" className="form" id="exampleFormControlInput4" placeholder="" />
        <label htmlFor="exampleFormControlInput4" className="form-label">Number Character</label>
    </div>   
    <div className="mb-3 d-flex gap-3">
        <input onChange={(e)=>setObj({...obj,special:e.target.checked})} checked={obj.special}  type="checkbox" className="form" id="exampleFormControlInput5" placeholder="" />
        <label htmlFor="exampleFormControlInput5" className="form-label">Speciel Character</label>
    </div>   
    
    <div className="mb-3">
        <input onChange={()=>{

            setError(true)
            setTimeout(()=>{
              setError(false)
            },3000)
        }
        }
         value={password}  type="text" className="form-control" id="exampleFormControlInput2" placeholder="" />
         {error && <p className=' mt-4 text-danger'>This Field is can't Write only Read and Copy Your Password</p>}         
    </div> 
    <div className='d-flex gap-4'>
        <button onClick={Generate} className="btn btn-success">Generate</button>
        <button onClick={Copy} className="btn btn-warning">Copy</button>
        <button onClick={Clear} className="btn btn-danger">Clear</button>
    </div>          
    </div>

    </div>

  )
}
