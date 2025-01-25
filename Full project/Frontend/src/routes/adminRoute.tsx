// import React from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom'; 
// import { useSelector } from 'react-redux'; 
// import Dashboard from '../pages/admin/dashBoard';

// function AdminRoute() {
//   const { accessToken, userRole } = useSelector((state) => state.auth);

//   if (!accessToken) {
//     return <Navigate to="/login" />;
//   }

//   if (userRole !== 'admin') {
//     return <Navigate to="/unauthorized" />;
//   }

//   return (
//     <>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </>
//   );
// }

// export default AdminRoute;
