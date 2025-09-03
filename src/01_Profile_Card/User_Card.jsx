import { User } from "./User"
import "./Css.css"
export const User_Card = () => {
   let users=[
    {id:1,name:"Mohan",sklils:['Java',"C++","C","Ui/Ux","React",'Python'],city:'Salem',desc:"Full Stack Developer",is_online:true},
    {id:2,name:"Mohan",sklils:['Java',"C++","C","Ui/Ux","Back Development","React",'Python'],city:'Salem',desc:"Full Stack Developer",is_online:false},
    {id:3,name:"Mohan",sklils:['Java',"C++","C","Ui/Ux","Front Development","React",'Java'],city:'Salem',desc:"Web Developer",is_online:true},
    {id:4,name:"Mohan",sklils:['Java',"C++","C","Ui/Ux","Front Development","React",'Python'],city:'Salem',desc:"Front Developer",is_online:true},

   ]
  return (
    <div className="user-card d-flex flex-wrap  gap-1">
      {users.map((user)=>(
         <User user={user} key={user.id} />  
        ))}
    </div>
  )
}
