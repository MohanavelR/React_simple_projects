import React, { useEffect, useState } from "react";
import './Currency_Convector.css'

export const Currency_Convector = () => {
  const [rates, SetRates] = useState([]);
  const[tocurr,SetTocurr]=useState('INR')
  const[fromcurr,SetFromcurr]=useState('INR')
  const[amount,setAmount]=useState(0)
  const[count,setCount]=useState(1)
  const [error,setError]=useState(false)
  const [Server,setserver]=useState(false)
  async function Fetch_data() {
    try{
      let data = await fetch("https://api.exchangerate-api.com/v4/latest/INR");
      let json = await data.json();
      SetRates(Object.keys(json.rates));
    }
    catch(error){
       setserver(true)
    }
  }
   async function Convert(){
    let cuur=Number(count)
    if(count>=0){
      let data = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromcurr}`);
      let json = await data.json();
      let value= (json.rates[tocurr]*count).toFixed(2)
      setAmount(value)
    }
    else{
       console.log(typeof(count))
       setError(true)
       setAmount('')
       setTimeout(()=>{
        setError(false)
       },3000)
    }

  }
 useEffect(()=>{
  let s=Fetch_data()
  let v=Convert()
 },[count,fromcurr,tocurr])
  return (
  <>
    <div className="currency-main-container flex-column d-flex justify-content-center align-items-center">
      <h1 className="text-success">Currency Convector</h1>
      {Server &&  <div className="alert alert-danger" role="alert">
          Server is Not Response
      </div> }
      <div className="currency-container  mt-2 rounded bg-white p-3 col-12 col-md-7">
      {error &&  <div class="alert alert-danger " role="alert">
       Please Enter Valied Amount 
    </div>}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter Amount
          </label>
          <input
          value={count}
            onChange={(e)=>{
              setCount(e.target.value)
              
            }
            }
            type="number"
            className="form-control"
            id=""
            placeholder=""
            min={1}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          From Currency
          </label>
            <select value={fromcurr} 
            onChange={(e)=>{
              SetFromcurr(e.target.value)
              
            }
            }
            className="form-select" name="" id="">
              {rates.map((element,index)=>(
                <option key={index} value={element}>{element}</option>
              ))}
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          To Currency
          </label>
          <select value={tocurr}
                       onChange={(e)=>{
                        SetTocurr(e.target.value)
                       
                      }
                      }
           className="form-select" name="" id="">
              {rates.map((element,index)=>(
                <option key={index} value={element}>{element}</option>
              ))}
            </select>
        </div>
        {/* <div>
          <button onClick={Convert} className="btn btn-primary">Convert</button>
        </div> */}
       {amount!=null &&       
        <div className="p-3 result mt-3">
          <span>{count} {fromcurr} Equals to {amount} {tocurr}</span>
        </div>
       }
      </div>
    </div>
  </>
              )
};
