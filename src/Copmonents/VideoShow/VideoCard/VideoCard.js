import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

  

function VideoCard({image,title,channel,views,timestamp,chanelImg}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" />
            <div className="videoCard_info">
              <AccountCircleOutlinedIcon className="video-avatar" alt={channel} src={chanelImg}/>
            <div className="video=text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views}  {timestamp}</p>
            </div>
              </div>
        </div>
    )
}

export default VideoCard
