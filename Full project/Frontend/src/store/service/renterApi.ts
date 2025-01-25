import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../type";

export const renterApi = createApi({
  reducerPath: "renterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/renter",
  }),
  endpoints: (builder) => ({
    renterSignUp: builder.mutation({
      query: (user: IUser) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
    renterLogin: builder.mutation({
      query: (user: IUser) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    getAllCars: builder.query({
      query: () => "/cars/available",
    }),
    rentCar: builder.mutation({
      query: ({ carId, userId }) => ({
        url: `/rent/${carId}`,
        method: "POST",
        body: { userId },
      }),
    }),
    cancelRental: builder.mutation({
      query: (rentalId) => ({
        url: `/cancel/${rentalId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRenterSignUpMutation,
  useRenterLoginMutation,
  useGetAllCarsQuery,
  useRentCarMutation,
  useCancelRentalMutation,
} = renterApi;
