import React from 'react'
import './VideoCard.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

  

function VideoCard(props) {
  const {image,title,channel,views,timestamp,chanelImg} = props.video;
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail"  src={image} alt="" />
            <div className="videoCard_info">
              <AccountCircleOutlinedIcon className="video_avatar" alt={channel} src={chanelImg}/>
            <div className="videoCard_text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views}  {timestamp}</p>
            </div>
              </div>
        </div>
    )
}

export default VideoCard
