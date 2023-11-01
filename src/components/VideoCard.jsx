import { Link } from "react-router-dom";

const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
const demoVideoUrl = '/video/GDa8kZLNhJ4';
const demoChannelTitle = 'JavaScript Mastery';
const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'


function VideoCard({video : {id: {videoId} , snippet }}) {
  console.log(videoId)
  console.log(snippet)

  return (
    <div className="videoCard">
    <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl} >
        <img src={snippet?.thumbnails?.high?.url}></img>
    </Link>
        <div className="videoCardInfo">
          <h3 title={snippet?.title}>{ snippet?.title }</h3>
          <a href="" title={snippet?.channelTitle}> <p>{snippet?.channelTitle}</p></a>
          <p >{snippet?.publishedAt?.replaceAll("-","/").replace("T"," ").replace("Z","").split(" ").join(" - ")}</p>
        </div>

    </div>
  )
}

export default VideoCard