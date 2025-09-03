import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User_Card } from './01_Profile_Card/User_Card'
import { QR_Scanner } from './02_QR_Code_Generator/QR_Scanner'
import { UserForm } from './03_UserForm/UserForm'
import Advices from './04_Advices_app/Advices'
import WeatherApp from './05_WeatherApp/WeatherApp'
import { BMI_Calculator } from "./06_BMI_Calculator/BMI_Calculator"
import { Currency_Convector } from "./07_Currency_Convetor/Currency_Convector"
import { Clock } from "./08_Digital_Clock/Clock"
import { Generate_Password } from "./09_Generate_passwoed/Generate_Password"

import { FAQS } from "./10_FAQS/FAQS"
import Home from './00_Home/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} index />
      <Route path='/profile-card' element={<User_Card/>}/>
      <Route path='/QR-generator' element={<QR_Scanner/>}/>
      <Route path='/userform' element={<UserForm/>}/>
      <Route path='/advice-app' element={<Advices/>}/>
      <Route path='/weather-app' element={<WeatherApp/>}/>
      <Route path='/bmi-calculator' element={<BMI_Calculator/>}/>
      <Route path='/currency-convetor' element={<Currency_Convector/>}/>
      <Route path='/digital-clock' element={<Clock/>}/>
      <Route path='/generate-password' element={<Generate_Password/>}/>
      <Route path='/faqs' element={<FAQS/>}/>
    </Routes>
    </BrowserRouter>
      {/* <User_Card/>  */}
     {/* <QR_Scanner/> */}
     {/* <UserForm/> */}
     {/* <Advices/> */}
     {/* <WeatherApp/> */}
     {/* <BMI_Calculator/> */}
     {/* <Currency_Convector/> */}
     {/* <Clock/> */}
     {/* <Generate_Password/> */}
     {/* <FAQS/> */}
    </>
  )
}

export default App
