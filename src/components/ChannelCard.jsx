/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function ChannelCard({channel, customStyle}) {
  return (
    <div className="channelCard videoCard " style={customStyle}>
      <Link to={ `/Chutub/channel/${channel?.id?.channelId}`}>
          <img src={channel?.snippet?.thumbnails?.high?.url }></img>
          <h3 title={channel?.snippet?.title}>{channel?.snippet?.title}</h3>
          {channel?.statistics?.subscriberCount && <p title={channel?.statistics?.subscriberCount}>{ parseInt(channel?.statistics?.subscriberCount).toLocaleString() + " Subscribers"}</p> }
        {/* esta ultima linea es para reusar el componente y datos de suscriptores en el componente Channel */}
      </Link>
    </div>
  )
}

export default ChannelCard