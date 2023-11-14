import React from 'react'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchData'
import { useParams } from 'react-router-dom'
import VideoList from './VideoList'


function SearchFeed() {
  const [videoList, setVideoList] = useState(null)
  const { searchTerm } = useParams() 

  useEffect(()=>{
    setVideoList(null)
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then( (data) =>  setVideoList(data.items))
      .catch( e => console.log(e))
  },[searchTerm])


  return (
    <div className='feedContainer'>
      <div className='videoFeed'>
        <h2 className='feedTitle'>Search results for: <span style={{color: "antiquewhite"}}>{searchTerm}</span>    Videos</h2>
      {videoList && <VideoList videoList={videoList}/>} 
      </div>

    </div>
  )
}

export default SearchFeed