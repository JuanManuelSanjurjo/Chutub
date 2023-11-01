import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import VideoList from './VideoList'
import { fetchFromAPI } from '../utils/fetchData'


function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videoList,setVideoList] = useState(null)

  useEffect(()=>{
    setVideoList(null)
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then( (data) =>  setVideoList(data.items))
      .catch( e => console.log(e))
  },[selectedCategory])


  return (
    <div className='feedContainer'>
      <div className='sidebarContainer'>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
      <div className='videoFeed'>
        <h2 className='feedTitle'><span style={{color: "antiquewhite"}}>{selectedCategory}</span>  Videos</h2>
      {videoList && <VideoList videoList={videoList}/>} 
      </div>

    </div>
  )
}

export default Feed