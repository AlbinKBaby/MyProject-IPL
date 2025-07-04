import { Route, Routes } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Login from "./Components/Login"
import Register from "./Components/Register"
import AdminLand from "./Admin/AdminLand"
import Teams from "./Admin/Teams"
import Players from "./Admin/Players"
import AdminReq from "./Admin/AdminReq"
import TeamLand from "./UserTeam/TeamLand"
import UserProfile from "./UserTeam/UserProfile"
import UserPlayers from "./UserTeam/UserPlayers"
import UserFund from "./UserTeam/UserFund"
import AuctionLive from "./Auction/AuctionLive"
import AdminAucion from "./Auction/AdminAucion"
import UserAuction from "./Auction/UserAuction"
import AdmiRegister from "./Admin/admiRegister"
import AssoRegister from "./Association/assoRegister"
import AssoLand from "./Association/AssoLand"



function App() {


  return (
    <>


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="adminregister" element={<AdmiRegister />} />
        <Route path="assoregister" element={<AssoRegister />} />
        <Route path="assoland" element={<AssoLand />} />
        <Route path="admin" element={<AdminLand />} />
        <Route path="teams" element={<Teams />} />
        <Route path="players" element={<Players />} />
        <Route path="requests" element={<AdminReq />} />
        <Route path="user" element={<TeamLand />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="userplayers" element={<UserPlayers />} />
        <Route path="fund" element={<UserFund />} />
        <Route path="auctionlive" element={<AuctionLive />} />
        <Route path="auctionadmin" element={<AdminAucion />} />
        <Route path="userauction" element={<UserAuction />} />
      </Routes>

    </>
  )
}

export default App
