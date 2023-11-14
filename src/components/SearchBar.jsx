import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchBar() {
   const [searchTerm, setSearchTerm] = useState("")

   const navigate = useNavigate()

   function handleSubmit(e){
        e.preventDefault()
    console.log(searchTerm)
        if(searchTerm){
            navigate(`/Chutub/search/${searchTerm}`)
            setSearchTerm("")
        }
   }

  return (
        <div className="searchContainer">
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={ (e) => setSearchTerm(e.target.value) } value={searchTerm} placeholder="Search for videos"  spellCheck="false"></input>
                <button type="submit" >
                    <i className='fi-xnsuxl-search' ></i>
                </button>    
            </form>
        </div>
  )
}

export default SearchBar