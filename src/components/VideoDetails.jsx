import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams, Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchData'
import Loading from './Loading'

function VideoDetails() {
  const [videoDetail, setVideoDetails] = useState(null)
  const { id } = useParams()


  useEffect(()=> {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => {setVideoDetails(data.items[0])})
      .catch( e => console.error(e))
  },[id])
  
  
  
  if(!videoDetail?.snippet) return <Loading />       
   
  const { snippet : {title,channelId, channelTitle},
  statistics: {viewCount , likeCount}} = videoDetail


  return (
    <div className='videoPageContaier'>
      <div className='videoContainer'>
        <ReactPlayer className="player" url={`https://www.youtube.com/watch?v=${id}`} controls />
          <h2>{title}</h2>
        <div className='videoDetail'>
          <Link to={ channelId ? `/Chutub/channel/${channelId}` : "Channel Title"} >
            <p>{channelTitle }</p>
          </Link> 
          <div className='likesAndViewsContainer'>
            <p>{parseInt(viewCount).toLocaleString() + " views"}</p>
            <p>{parseInt(likeCount).toLocaleString() + " likes"}</p>
          </div>
        </div> 
      </div>


    </div>
  )
}

export default VideoDetails