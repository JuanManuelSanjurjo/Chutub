import PropTypes from "prop-types"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

function VideoList({ videoList }) {
  
  if(!videoList?.length) return <h1>Loading...</h1>;
  
  return (
    <div className="feed">
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

VideoList.propTypes = {
  videoList: PropTypes.array
}

export default VideoList