// src/Redux/Slice/teamSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeams = createAsyncThunk('team/fetchTeams', async () => {
  const response = await axios.get('/api/team'); // Adjust to your actual backend route
  return response.data;
});

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    teams: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teamSlice.reducer;
