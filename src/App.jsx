import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AdminLand from "./Admin/AdminLand";
import Teams from "./Admin/Teams";
import Players from "./Admin/Players";
import AdminReq from "./Admin/AdminReq";
import TeamLand from "./UserTeam/TeamLand";
import UserProfile from "./UserTeam/UserProfile";
import UserPlayers from "./UserTeam/UserPlayers";
import UserFund from "./UserTeam/UserFund";
import AuctionLive from "./Auction/AuctionLive";
import AdminAucion from "./Auction/AdminAucion";
import UserAuction from "./Auction/UserAuction";
import RegisterAdmin from "./Admin/RegisterAdmin";
import AssoRegister from "./Association/AssoRegister";
import AssoLand from "./Association/AssoLand";
import AddPlayer from "./Association/AddPlayer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminregister" element={<RegisterAdmin />} />
        <Route path="/assoregister" element={<AssoRegister />} />
        <Route path="/addplayer" element={<AddPlayer/>}/>

        {/* 👇 Must match these with login redirection */}
        <Route path="/admin" element={<AdminLand />} />
        <Route path="/user" element={<TeamLand />} />
        <Route path="/assoland" element={<AssoLand />} />

        {/* Admin Routes */}
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/requests" element={<AdminReq />} />

        {/* Team Routes */}
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/userplayers" element={<UserPlayers />} />
        <Route path="/fund" element={<UserFund />} />

        {/* Auction Routes */}
        <Route path="/auctionlive" element={<AuctionLive />} />
        <Route path="/auctionadmin" element={<AdminAucion />} />
        <Route path="/userauction" element={<UserAuction />} />
      </Routes>
    </>
  );
}

export default App;
