// src/store/api/kycApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SubmitKYCResponse {
  success: boolean;
}
export const kycApi = createApi({
  reducerPath: "kycApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }), // Adjust the base URL if necessary
  endpoints: (builder) => ({
    submitAdminKYC: builder.mutation<
      SubmitKYCResponse,
      { name: string; file: File }
    >({
      query: ({ name, file }) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("kycPhoto", file);
        console.log(formData);
        return {
          url: "/admins/kycComplete",
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
      },
    }),
    submitRenterKYC: builder.mutation<
      SubmitKYCResponse,
      { name: string; file: File }
    >({
      query: ({ name, file }) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);

        return {
          url: "/renter/kycComplete",
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
      },
    }),
  }),
});

export const { useSubmitAdminKYCMutation, useSubmitRenterKYCMutation } = kycApi;
