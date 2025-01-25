import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
// import { authApi } from "./service/authApi";
import { adminApi } from "./service/adminApi";
import { renterApi } from "./service/renterApi";
import { kycApi } from "./service/kycApi";
import { authApi } from "./service/authApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [adminApi.reducerPath]: adminApi.reducer, // The reducer for the adminApi service
    [renterApi.reducerPath]: renterApi.reducer,
    [kycApi.reducerPath]: kycApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      adminApi.middleware,
      renterApi.middleware,
      kycApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>; // Get the RootState type
export type AppDispatch = typeof store.dispatch; // Get the AppDispatch type

export default store;
