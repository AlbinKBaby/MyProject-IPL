import { Route, Routes } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Login from "./Components/Login"
import Register from "./Components/Register"



function App() {


  return (
    <>
     
       
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
       
      </Routes>
      
    </>
  )
}

export default App
