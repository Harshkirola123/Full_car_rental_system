import { Route, Routes } from "react-router-dom"
import Base from "./layout/base"
import Home from "./pages/Home"
import AdminLogin from "./pages/admin/adminLogin"
import AdminSignUp from "./pages/admin/Signup"
import Kyc from "./pages/kycPage"
import SignUp from "./pages/renter/Signup"
import Login from "./pages/renter/Login"
import Dashboard from "./pages/renter/dashboard"
import AdminDashboard from "./pages/admin/dashBoard"

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element={<Base />} >
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />  
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/admin/signUp" element={<AdminSignUp />} />  
        <Route path="/renter/signup" element={<SignUp />} />  
        <Route path="/renter/login" element={<Login />} /> 
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/renter/dashboard" element={<Dashboard />} />

        </Route>
        </Routes>
    </>
  )
}

export default App
