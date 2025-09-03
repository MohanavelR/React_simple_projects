import React, { useEffect, useState } from 'react'
import './BMI_Calculator.css'
export const BMI_Calculator = () => {
    const[details,setDetails]=useState({height:'',weight:'',status:''})
    const[error,setError]=useState(false)
    const[bmi,setBmi]=useState(null) 
    function Calculate(){
          
    if(details.height==='' && details.weight==='' || details.height===Number && details.weight===Number){
         setError(true)
    }
    else if(details.height && details.weight){        
        const height=details.height/100
        const bmivalue=details.weight/(height * height);
        setBmi(bmivalue.toFixed(2))
        if(bmi<18.5){
            setDetails({...details,status:"UnderWeight"})   
        }
        else if(bmi>=18.5 && bmi < 24.9){
            setDetails({...details,status:"Normal Weight"}) 
           
        }
        else if(bmi > 25 && bmi < 29.9){
            setDetails({...details,status:"OverWeight"})
            
        }
        else{
            setDetails({...details,status:"Obese"})
            console.log('call')
        }
    }
    else{
        setDetails({...details,status:""})
        setBmi(null)
    }
}
function Clear(){
    setDetails({...details,height:'',weight:''})
    setBmi(null)
    setError(false)
}

return (
    <><div className='main-bmi-container p-3 d-flex flex-column justify-content-center align-items-center'>
     <div className='bmi-container text-white rounded p-5'>
       <h2>BMI CALCULATOR</h2>
       {error &&  <div class="alert alert-danger " role="alert">
       Please Enter Height And Weight 
    </div>
    }
        <div className="mb-3 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Height(kg)</label>
        <input value={details.height} onChange={(e)=>setDetails({...details,height:e.target.value})} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Height" />
    </div>
    <div className="mb-3 mt-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label  mt-2">Weight(cm)</label>
        <input value={details.weight} onChange={(e)=>setDetails({...details,weight:e.target.value})} type='number' className="form-control" id="exampleFormControlTextarea1" placeholder='Weight' rows="3"></input>
    </div>
    <div className='mt-3 d-flex justify-content-center gap-3 col-12'>
        <button onClick={Calculate} className='btn btn-success'>Calculate</button>
        <button onClick={Clear} className="btn btn-warning">Clear</button>
    </div>
   {bmi!=null &&
   
     <div className='mt-4 '>
        <p>Your BMI is :{bmi}</p>
        <p>Status :{details.status}</p>
    </div>
   }
  
     </div>
    </div>
        
    </>
  )
}
