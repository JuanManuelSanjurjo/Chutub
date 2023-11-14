import React from 'react'
import ChannelCard from './ChannelCard'
import VideoList from './VideoList'
import { fetchFromAPI } from '../utils/fetchData'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const customStyle = {
  scale: "1.2",
   marginTop: '-50px', 
   backgroundColor: "transparent", 
   pointerEvents: "none",
}


function Channel() {
  const [channelInfo, setChannelInfo] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then( data => setChannelInfo(data.items[0]))
      .catch( err => console.log(err))

      fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then( data => setVideos(data.items))
      .catch( err => console.log(err))

  },[id])

  
  return (
    <div className='channelPage'>
        <div  className='channelBanner'>
          <img src={channelInfo?.brandingSettings?.image?.bannerExternalUrl}></img>
        </div>
       <ChannelCard customStyle={customStyle} channel={channelInfo} ></ChannelCard>
       { VideoList && <VideoList videoList={videos}></VideoList>}
    </div>
  )
}

export default Channel