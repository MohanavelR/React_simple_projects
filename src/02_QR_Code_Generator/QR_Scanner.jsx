import React, { useState } from "react";
import "./QR_Scanner.css";
import { use } from "react";
export const QR_Scanner = () => {
  const [url, setUrl] = useState("images/Qr_code.png");
  const [get_url, setGet_url] = useState("Please Privide Your Data");
  const [load, setLoad] = useState(false);
  const [text, setText] = useState(false);
  const [size, setSize] = useState(200);
  function Generate() {
    
    setText("Please Wait...");
    setUrl("");
    try{
       setLoad(true);
      setTimeout(() => {
  
        const urls = `http://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${get_url}`;
        setUrl(urls);
        setLoad(false);
        
      }, 2000);
    }
    catch (error){
     setLoad(false)
      setText(true)
      
    }
  }
  function Download() {
   fetch(url).then((data)=>data.blob().then((blob_data)=>{
    let link=document.createElement('a')
    console.log(blob_data)
    link.href=URL.createObjectURL(blob_data)
    document.body.appendChild(link)
    link.download="Qr-Code.png"
    link.click()
    document.body.removeChild(link)
   }))
     }
  return (
    <div className="d-flex flex-column justify-content-center  gap-3 align-items-center main-scanner text-white ">
      <h1>QR GENERATOR</h1>
      <div className="img rounded flex-column d-flex justify-content-center align-items-center ">
        {load && (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        {text && <p>Failed to Generate QR code.</p> 
         }
        <img src={url} alt="" />
      </div>
      <div className="col-8 d-flex scanner p-3 text-white gap-3 rounded">
        <div className="col-12 p-3">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              <b className="text-secondary">
              Data For QR Code :
              </b>
            </label>
            <input
              onChange={(e) => setGet_url(e.target.value)}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your Url"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              <b className="text-secondary">
              Image Size:
              </b>
            </label>
            <input
              onChange={(e) => setSize(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Ex:200"
              rows="3"
            />
          </div>
          <div>
            <button onClick={Generate} className="btn btn-primary">
              Generate
            </button>
            <button onClick={Download} className="btn btn-success ms-3">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};
// const url = `http://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${urls}`;
