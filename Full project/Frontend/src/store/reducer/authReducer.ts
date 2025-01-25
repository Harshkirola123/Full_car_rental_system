import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { adminApi } from "../service/adminApi"; // Importing the adminApi
// import { renterApi } from "../service/renterApi"; // Importing the renterApi
import { IUser } from "../../type"; // Import user type, adjust according to your file structure

interface AuthState {
  user: IUser | null;
  token: string | null;
  refToken: string | null;
  isAuthenticated: boolean;
  role: "ADMIN" | "USER";
}

const initialState: AuthState = {
  user: null,
  token: null,
  refToken: null,
  isAuthenticated: false,
  role: "USER", // Role can be either admin or renter
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action for logging in (we will dispatch this after successful login)
    loginSuccess: (
      state,
      action: PayloadAction<{
        user: IUser;
        token: string;
        refToken: string;
        role: "ADMIN" | "USER";
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refToken = action.payload.token;
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
    // Action for logging out
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refToken = null;
      state.isAuthenticated = false;
      state.role = "USER";
    },
  },
  extraReducers: (builder) => {
    // Admin Login Success Handler
    builder.addMatcher(
      adminApi.endpoints.adminLogin.matchFulfilled,
      (state, action: PayloadAction<{ accessToken: string; user: IUser }>) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isAuthenticated = true;
        state.role = "ADMIN"; // Mark role as admin
      }
    );

    // Login Failure Handlers
    builder.addMatcher(adminApi.endpoints.adminLogin.matchRejected, (state) => {
      state.isAuthenticated = false;
    });
  },
});

// Export the action creators (loginSuccess, logout) to dispatch them
export const { loginSuccess, logout } = authSlice.actions;

// Export the reducer to be added to the store
export default authSlice.reducer;
