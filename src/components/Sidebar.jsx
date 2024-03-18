import { categories } from "../utils/constants"

function Sidebar({selectedCategory, setSelectedCategory}) {

  return (
    <div className="sidebar">
      {categories.map((cat, i) => (
        <button key={i} className={cat.name === selectedCategory ? "selected btnCategory": "btnCategory"}  key={cat.name}
            onClick={()=> setSelectedCategory(cat.name)}>
            <img src={cat.src} alt={cat.name} className={`catIcon`} />
            <span>{cat.name}</span>
        </button>

      ))}
      
      <p>Copyright JMS {new Date().getFullYear().toString()} </p>
    </div>
  )
}

export default Sidebar

