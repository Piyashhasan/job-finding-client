import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

// --- initial state ---
const initialState = {
  email: "",
  role: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

// --- create user ---
export const createUserEmailPassword = createAsyncThunk(
  "auth/createUserEmailPassword",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

// --- login user ---
export const signInUserEmailPassword = createAsyncThunk(
  "auth/signInUserEmailPassword",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

// --- google login ---
export const googleAuth = createAsyncThunk("auth/googleAuth", async () => {
  const provider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, provider);
  return data.user.email;
});

// --- auth slice ---
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logOut: (state) => {
      state.email = "";
      state.role = "";
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.error = "";
    },
    setUser: (state, action) => {
      state.email = action.payload;
      state.isLoading = false;
    },
    handleErrorMessage: (state) => {
      state.email = "";
      state.role = "";
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserEmailPassword.pending, (state) => {
        state.email = "";
        state.role = "";
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUserEmailPassword.fulfilled, (state, action) => {
        state.email = action.payload;
        state.role = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUserEmailPassword.rejected, (state, action) => {
        state.email = "";
        state.role = "";
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(signInUserEmailPassword.pending, (state) => {
        state.email = "";
        state.role = "";
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(signInUserEmailPassword.fulfilled, (state, action) => {
        state.email = action.payload;
        state.role = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(signInUserEmailPassword.rejected, (state, action) => {
        state.email = "";
        state.role = "";
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(googleAuth.pending, (state) => {
        state.email = "";
        state.role = "";
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.email = action.payload;
        state.role = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleAuth.rejected, (state, action) => {
        state.email = "";
        state.role = "";
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

// --- action export ---
export const { logOut, setUser, handleErrorMessage } = authSlice.actions;

// --- reducer export ---
export default authSlice.reducer;
