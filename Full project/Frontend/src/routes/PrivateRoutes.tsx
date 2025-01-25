// import React from "react";
// import { Route, Navigate, RouteProps } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store"; // assuming you have a `store.ts` file for your Redux store


// interface PrivateRouteProps extends RouteProps {
//   element: React.ReactNode;
//   requiredRole : "ADMIN" | "USER";
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   element,
//   requiredRole,
//   ...rest
// }) => {
//   // Get the access token and user role from the Redux store (or wherever it's stored)
//   const { token, role } = useSelector(
//     (state: RootState) => state.auth // assuming your auth state looks like { accessToken, userRole }
//   );

//   // If the user is not authenticated, redirect to the login page
//   if (!token) {
//     return <Navigate to="/renter/login" />;
//   }

//   // If the required role is 'admin' and the user isn't an admin, redirect to the renter dashboard
//   if (requiredRole === "ADMIN" && role !== "ADMIN") {
//     return <Navigate to="/renter/dashboard" />;
//   }

//   // If the required role is 'renter' and the user isn't a renter, redirect to the admin dashboard
//   if (requiredRole === "USER" && role !== "USER") {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   // If authenticated and the role matches, render the requested route
//   return <Route {...rest} element={element} />;
// };

// export default PrivateRoute;
