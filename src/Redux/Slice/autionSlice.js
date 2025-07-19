// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getAuctionPlayers } from "../services/auctionService";

// // Async thunk to fetch players
// export const fetchPlayers = createAsyncThunk(
//   "auction/fetchPlayers",
//   async (_, thunkAPI) => {
//     try {
//       const players = await getAuctionPlayers();
//       return players;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch players"
//       );
//     }
//   }
// );

// const auctionSlice = createSlice({
//   name: "auction",
//   initialState: {
//     players: [],
//     bids: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     addBid(state, action) {
//       state.bids.push(action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPlayers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchPlayers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.players = action.payload;
//       })
//       .addCase(fetchPlayers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { addBid } = auctionSlice.actions;
// export default auctionSlice.reducer;
