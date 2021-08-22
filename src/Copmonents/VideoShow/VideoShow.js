import React from 'react';
import './VideoShow.css';
import VideoCard from './VideoCard/VideoCard';

const videoDescriptions = [
    {
        title:"become a web developer in 10 mimits",
        views: "1.5m views",
        timestamp:"3 days ago",
        channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
        channel:"mahabub",
        image:"https://i.ibb.co/F6jp222/mahabub.png"

    },
    {
      title:"become a web developer in 10 mimits",
      views: "1.5m views",
      timestamp:"3 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"https://www.youtube.com/watch?v=knad62JxBTY",
      image:"https://i.ibb.co/F6jp222/mahabub.png"

  },
  {
      title:"become a web developer in 10 mimits",
      views: "1.5m views",
      timestamp:"3 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/F6jp222/mahabub.png"

  }
  , {
      title:"become a web developer in 10 mimits",
      views: "1.5m views",
      timestamp:"3 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/F6jp222/mahabub.png"

  },
  {
      title:"become a web developer in 10 mimits",
      views: "1.5m views",
      timestamp:"3 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/F6jp222/mahabub.png"

  }
  , {
      title:"become a web developer in 10 mimits",
      views: "1.5m views",
      timestamp:"3 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/F6jp222/mahabub.png"

  }
]

function VideoShow() {
    return (
        <div className="videoShow">
            <h2>Recommended</h2>
            <div className="videoShow">
          {
             videoDescriptions.map( video => <VideoCard video={video}></VideoCard>)
            }
         
         
            </div>
        </div>
    )
}

export default VideoShow
