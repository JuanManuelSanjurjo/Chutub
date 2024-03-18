import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

function Navbar() {
  return (
    <div className='navBar'>
      <Link to={"/Chutub"}>
        <img src="player-skip-forward.png" className='favIcon' ></img>
        <h2 className="logo">CHUTUB</h2>
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar