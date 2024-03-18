import { categories } from "../utils/constants"

function Sidebar({selectedCategory, setSelectedCategory}) {

  return (
    <div className="sidebar">
      {categories.map((cat, i) => (
        <button key={i} className={cat.name === selectedCategory ? "selected btnCategory": "btnCategory"}  key={cat.name}
            onClick={()=> setSelectedCategory(cat.name)}>
            <img src={cat.src} alt={cat.name} className={`catIcon`}></img>
            <span>{cat.name}</span>
        </button>

      ))}
      <button  className={"Anime" === selectedCategory ? "selected btnCategory": "btnCategory"} 
            onClick={()=> setSelectedCategory("Anime")}>
            <img src={"src/assets/anime.png"} alt={"Anime"} className={`catIcon`}></img>
            <span>{"Anime"}</span>
      </button>

      
      <p>Copyright JMS {new Date().getFullYear().toString()} </p>
    </div>
  )
}

export default Sidebar

