/* eslint-disable react/prop-types */
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

function VideoList({ videoList, customStyle }) {
  
  if(!videoList?.length) return <h1>Loading...</h1>;
  
  return (
    <div className="feed" style={customStyle}>
      { videoList.map((item, id) => 
      (
          <div key={id}>
           {item.id.videoId && <VideoCard  video={item} />}
           {item.id.channelId && <ChannelCard channel={item} />}
          </div>
        )
      )}
    </div>
  )
}


export default VideoList