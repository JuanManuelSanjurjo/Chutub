import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

function Navbar() {
  return (
    <div className='navBar'>
      <Link to={"/"}>
        <i className='favIcon fi-cnsxx2-play' ></i>
        <h2 className="logo">CHUTUB</h2>
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar