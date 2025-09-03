import React from 'react'
// import profile from 'profile.jpeg'
export const User = ({user}) => {
  return (
    <div>
        <div className="card border-1 p-2  rounded text-white" >
        <h6 className='m-2'><span className={`badge ${user.is_online ? "bg-warning ":"bg-secondary"} `}>{user.is_online ? "Online ":"Offline"} </span></h6>
        <div className='img-div col-12 d-flex justify-content-center align-items-center'>

        <img src='images/profile.jpeg' className="card-img-top  img rounded circle " alt="..." />
            </div>
        <div className="card-body text-center details">
            <h3 className="card-title">{user.name}</h3>
            <h4 className="card-title">{user.city}</h4>
            <h6 className="card-title">{user.desc}</h6>
            <p className="card-text">       
            </p>
        </div>
        <div className='d-flex col-12 gap-4 justify-content-center align-items-center'>
                 <button className='btn btn-primary'>Message</button>
                 <button className='btn btn-secondary'>Following</button>
        </div>
       

        <hr />
        
        <div className="card-body col-12 ">
        <b className="card-title text-start mb-4">Skills</b>
            <div className='d-flex flex-wrap gap-2 mt-2'>
                {user.sklils.map((skill,index)=>(

            <span key={index}  className="p-2 rounded skill-list">{skill}</span>
                ))}
            {/* <span  className="p-2 skill-list">Another link</span>
            <span  className="p-2 skill-list">Another link</span> */}
            {/* <span  className="p-2 skill-list">Another link</span> */}
            </div>
        </div>
    </div>
    </div>
  )
}
