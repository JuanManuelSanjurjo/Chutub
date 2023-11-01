
function SearchBar() {
     

  return (
        <div className="searchContainer">
            <form onSubmit={()=>{}}>
                <input type="text" placeholder="Search for videos" spellCheck="false"></input>
                <button type="submit" >
                    <i className='fi-xnsuxl-search' ></i>
                </button>    
            </form>
        </div>
  )
}

export default SearchBar