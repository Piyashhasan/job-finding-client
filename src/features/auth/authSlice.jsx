import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  role: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});

// --- action export ---
// const {} = authSlice.actions;

// --- reducer export ---
export default authSlice.reducer;
