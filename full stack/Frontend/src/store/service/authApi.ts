import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../type";

// Define the auth API with login and user data fetch endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api-url.com/" }), // Replace with your API URL
  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation<
      { user: IUser; token: string },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),

    // Fetch user data endpoint
    getUser: builder.query<IUser, void>({
      query: () => "user/profile", // Replace with your actual endpoint
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = authApi;
