// features/players/playerSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../Services/base_url";

axios.defaults.baseURL = base_url;

// Player Registration Thunk
export const registerPlayer = createAsyncThunk(
  'player/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/player/addplayer", formData);
      return response.data;
     
      
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Player registration failed" });
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  message: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    resetPlayerState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPlayer.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = "";
      })
      .addCase(registerPlayer.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(registerPlayer.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload?.message || "Something went wrong";
        state.message = "";
      });
  },
});

export const { resetPlayerState } = playerSlice.actions;
export default playerSlice.reducer;
