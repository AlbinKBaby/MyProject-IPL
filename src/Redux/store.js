import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import playerReducer from "./Slice/playerSlice"
import teamReducer from "./Slice/teamSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    player: playerReducer,
    // auction: auctionReducer,
    team:teamReducer,
  },
});

export default store;
