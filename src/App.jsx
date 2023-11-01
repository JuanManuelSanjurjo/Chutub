/* IMPORTS */ 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetails from "./components/VideoDetails"
import Channel from "./components/Channel"
import SearchFeed from "./components/SearchFeed"

function App() {

  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id"  element={<VideoDetails />} />
          <Route path="/channel/:id"  element={<Channel />} />
          <Route path="/search/:searchTerm"  element={<SearchFeed />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
