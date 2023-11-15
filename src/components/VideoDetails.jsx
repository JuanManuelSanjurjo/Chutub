import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams, Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchData'
import Loading from './Loading'
import VideoList from './VideoList'
import Comment from './Comment'


const customStyle = {
  flexDirection: "column",

}

function VideoDetails() {
  const [videoDetail, setVideoDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  const [comments, setComments] = useState(null)
  const { id } = useParams()


  useEffect(()=> {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => {setVideoDetails(data.items[0])})
      .catch( e => console.error(e))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then( data => setRelatedVideos(data.items) )
      .catch( e => console.error(e))  

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=50`)
    .then( data => setComments(data.items) )
    .catch( e => console.error(e))  
  },[id])
  
  
  
  if(!videoDetail?.snippet || !comments) return <Loading />       
   
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

        <div>
                  <h3 style={{fontSize:"1.125rem", paddingLeft: "20px", opacity: 0.8}}>Comments</h3>
          {comments.map( (item, id) => {
              return (
                <div key={id}>
                  <Comment  author={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                           content={item?.snippet?.topLevelComment?.snippet?.textOriginal}
                  />
                </div>   
              )
          })}
        </div>

      </div>

      <div>
          <VideoList videoList={relatedVideos} customStyle={customStyle} />
      </div>

    </div>
  )
}

export default VideoDetails