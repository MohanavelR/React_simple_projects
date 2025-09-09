import React, { useState } from 'react'
import './UserFrom.css'
export const UserForm = () => {
const[user,setUser]=useState({name:"Mohan",age:21,gender:"Male",isMarried:false,country:"India"})
function HandleForm(e){
  let name=e.target.name
  let type=e.target.type
  
  let value=type=="checkbox"? e.target.checked:e.target.value
  setUser({...user,[name]:value})
}    
return (
    <div className='p-5 d-flex flex-wrap  gap-3'>
    <div className='mt-3 col-12 col-md-6  borderd-form p-3 rounded'>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type='text' value={user.name} name='name' onChange={HandleForm}   className="form-control" id="exampleFormControlInput1" placeholder="" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">Age</label>
        <input onChange={HandleForm} name='age' value={user.age} type="" className="form-control" id="exampleFormControlInput2" placeholder="" />
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label d-block">Gender</label>
        <label htmlFor="" className="form-label me-2">Male</label>
        <input value="Male"  onChange={HandleForm} checked={user.gender=="Male"} name='gender' type="radio" className="form-radio" id="exampleFormControlInput2" placeholder="name@example.com" />
        <label htmlFor="" className="form-label ms-2 me-2">Female</label>
        <input value="Female" onChange={HandleForm} checked={user.gender=="Female"}  name='gender'  type="radio" className="form-radio" id="exampleFormControlInput3" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
        <input onChange={HandleForm} name='isMarried' checked={user.isMarried} type="checkbox" className="form-checkbox me-3" id="exampleFormControlInput4" placeholder="" />
        <label  htmlFor="" className="form-label">isMarried</label>
    </div>
    <div className="mb-3">
        <label  htmlFor="" className="form-label">Country</label>
             <select onChange={HandleForm} name="country" id="" value={user.country} className='form-select'>
                <option value="India">India</option>
                <option value="Usa">Usa</option>
             </select>
           </div>

    </div>
    
    <table className="table col-12 col-md-6  p-2 rounded table-hover  ">
        <tr>
            <th>Name</th>
            <td>:</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>:</td>
            <td>{user.age}</td>
        </tr>
        <tr>
            <th>Gender</th>
            <td>:</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <th>isMarried</th>
            <td>:</td>
            <td>{user.isMarried?"Yes":"No"}</td>
        </tr>
        <tr>
            <th>Country</th>
            <td>:</td>
            <td>{user.country}</td>
        </tr>

    </table>
    </div>
    
  )
}
