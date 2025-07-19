import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../../Services/base_url';

axios.defaults.baseURL = base_url;

// ------------------
// Async Thunks
// ------------------

// 🔐 Login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/login', { email, password });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Login failed" });
    }
  }
);

// 📝 Team Registration
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/register/team', formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Team registration failed" });
    }
  }
);

// 📝 Association Registration
export const registerAsso = createAsyncThunk(
  'user/registerAsso',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/register/asso', formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Association registration failed" });
    }
  }
);

// 📝 Admin Registration
export const registerAdmin = createAsyncThunk(
  'user/registerAdmin',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/register/admin', formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Admin registration failed" });
    }
  }
);

// ------------------
// Initial State
// ------------------

const initialState = {
  user: null,
  token: null,
  role: null,
  isLoggedIn: false,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// ------------------
// Slice
// ------------------

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isLoggedIn = false;
      state.status = 'idle';
      state.error = null;
      localStorage.clear(); // remove if not using persistence
    },
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // 🔐 Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user_data, jwt_Token } = action.payload;
        state.user = user_data;
        state.token = jwt_Token;
        state.role = user_data.role;
        state.isLoggedIn = true;
        state.status = 'succeeded';
        state.error = null;

        // optional persist
        localStorage.setItem('user', JSON.stringify(user_data));
        localStorage.setItem('token', jwt_Token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.payload?.error ||
          action.payload?.message ||
          'Login failed';
      });

    // 📝 Register (Team / Asso / Admin)
    [registerUser, registerAsso, registerAdmin].forEach((thunk) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(thunk.fulfilled, (state) => {
          state.status = 'succeeded';
          state.error = null;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.status = 'failed';
          state.error =
            action.payload?.message ||
            action.payload?.error ||
            'Registration failed';
        });
    });
  },
});

// ------------------
// Selectors (optional helpers)
// ------------------

export const selectUser = (state) => state.user.user;
export const selectRole = (state) => state.user.role;
export const selectToken = (state) => state.user.token;
export const selectAuthStatus = (state) => state.user.status;
export const selectAuthError = (state) => state.user.error;

// ------------------
// Exports
// ------------------

export const { logout, resetStatus } = userSlice.actions;
export default userSlice.reducer;
