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
import React, { Suspense } from "react"
import LoadingPage from "./component/LazyComponent"
import { motion } from "framer-motion"
import AdminCarDashboard from "./pages/admin/carDashboard"
// import CarDashboard from "./pages/renter/car-dashbord"
const CarDashboard = React.lazy(() => import("./pages/renter/car-dashbord"));

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element={<Base />} >
        <Route path="/" element={<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ><Home /></motion.div>} />
        <Route path="/admin/login" element={<AdminLogin />} />  
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/admin/signUp" element={<AdminSignUp />} />  
        <Route path="/renter/signup" element={<SignUp />} />  
        <Route path="/renter/login" element={<Login />} /> 
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/renter/dashboard" element={<Dashboard />} />
        
        <Route path="/carDashboard" element={
            <Suspense fallback={<LoadingPage />}>
            <CarDashboard />
            </Suspense>
        } />
        <Route path="/admin/carDashboard" element={
            <Suspense fallback={<LoadingPage />}>
            <AdminCarDashboard />
            </Suspense>
        } />
        
        </Route>
        </Routes>
    </>
  )
}

export default App
