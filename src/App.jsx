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



function App() {


  return (
    <>


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<AdminLand />} />
        <Route path="teams" element={<Teams />} />
        <Route path="players" element={<Players />} />
        <Route path="requests" element={<AdminReq />} />
        <Route path="user" element={<TeamLand />} />
        <Route path="userprofile" element={<UserProfile/>} />
        <Route path="userplayers" element={<UserPlayers/>} />
        <Route path="fund" element={<UserFund/>} />
        <Route path="auctionlive" element={<AuctionLive/>} />
        <Route path="auctionadmin" element={<AdminAucion/>}/>
        <Route path="userauction" element={<UserAuction/>}/>
      </Routes>

    </>
  )
}

export default App
