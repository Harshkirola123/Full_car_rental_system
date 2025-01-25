import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base query with logic for adding access token to headers
export const baseQueryWithRefreshToken = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refToken");

  // If no access token, handle the refresh logic
  const headers = new Headers();
  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  const result = await fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers) => {
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  })(args, api, extraOptions);

  // If the request is a 401 Unauthorized, attempt to refresh the token
  if (result.error && result.error.status === 401 && refreshToken) {
    // Call the refresh endpoint to get a new access token
    const refreshResponse = await api.dispatch(
      authApi.endpoints.refreshToken.initiate({})
    );

    if (refreshResponse.data && refreshResponse.data.accessToken) {
      // Update localStorage with the new access token
      localStorage.setItem("token", refreshResponse.data.accessToken);

      // Retry the original request with the new access token
      const retryResult = await fetchBaseQuery({
        baseUrl: "http://localhost:5000/api",
        prepareHeaders: (headers) => {
          headers.set(
            "Authorization",
            `Bearer ${refreshResponse.data.accessToken}`
          );
          return headers;
        },
      })(args, api, extraOptions);

      return retryResult;
    }
  }

  return result;
};

// Define the auth API with login and user data fetch endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: (builder) => ({
    // Refresh token endpoint
    refreshToken: builder.mutation({
      query: () => ({
        url: "/refresh",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refToken")}`,
        },
      }),
    }),
    // Example: Add any other endpoint here that requires access token
    fetchUserData: builder.query({
      query: () => ({
        url: "/renter/cars/available",
        method: "GET",
      }),
    }),
  }),
});

export const { useRefreshTokenMutation, useFetchUserDataQuery } = authApi;
