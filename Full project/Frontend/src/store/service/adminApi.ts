import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../type";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/admins" }),
  endpoints: (builder) => ({
    adminSignUp: builder.mutation({
      query: (user: IUser) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
    adminLogin: builder.mutation({
      query: (user: IUser) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    addCar: builder.mutation({
      query: (carData) => ({
        url: "/cars/create",
        method: "POST",
        body: carData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming the token is stored in localStorage
        },
      }),
    }),
    updateCar: builder.mutation({
      query: ({ carId, carData }) => ({
        url: `/cars/${carId}`,
        method: "PUT",
        body: carData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming the token is stored in localStorage
        },
      }),
    }),
    deleteCar: builder.mutation({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming the token is stored in localStorage
        },
      }),
    }),
    getOwnCars: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming the token is stored in localStorage
        },
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminSignUpMutation,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useGetOwnCarsQuery,
} = adminApi;
