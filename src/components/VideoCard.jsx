/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
// const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
const demoChannelTitle = 'JavaScript Mastery';
const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
// const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
const demoVideoUrl = '/Chutub/video/GDa8kZLNhJ4';


function VideoCard({video : {id: {videoId} , snippet }}) {

  return (
    <div className="videoCard">
    <Link to={ videoId ? `/Chutub/video/${videoId}` : demoVideoUrl} >
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}></img>
    </Link>
        <div className="videoCardInfo">
          <h3 title={snippet?.title}>{ snippet?.title || demoVideoTitle }</h3>
          <Link to={ snippet?.channelId ? `/Chutub/channel/${snippet?.channelId}` : demoChannelTitle} >
            <p>{snippet?.channelTitle || demoChannelTitle}</p>
          {/* <a href="" title={snippet?.channelTitle}> <p>{snippet?.channelTitle}</p></a> */}
          </Link> 
          <p >{snippet?.publishedAt?.replaceAll("-","/").replace("T"," ").replace("Z","").split(" ").join(" - ")}</p>
        </div>

    </div>
  )
}

export default VideoCard