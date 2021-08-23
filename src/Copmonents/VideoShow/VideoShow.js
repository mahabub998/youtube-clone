import React, { useEffect, useState } from "react";
import "./VideoShow.css";
import VideoCard from "./VideoCard/VideoCard";

// api = AIzaSyBx76aD_W3OH3cQ4zvyn4hGS1uYcic7yT8

const videoDescriptions = [
    {
        title:"how to create a youTube  channel",
        views: "1.5m views",
        timestamp:"3 days ago",
        channelImg:"https://i.ibb.co/JjGNSnB/download2.jpg",
        channel:"mahabub",
        image:"https://i.ibb.co/JjGNSnB/download2.jpg"

    },
    {
      title:"how to video recode process",
      views: "25m views",
      timestamp:"4 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/RSqGqgH/download3.jpg"

  },
  {
      title:"become a web developer in 10 mimits",
      views: "15m views",
      timestamp:"5 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/d2w7NHX/images4.jpg"

  }
  , {
      title:"become a web developer in 10 mimits",
      views: "1m views",
      timestamp:"6 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/d42ynBH/images5.jpg"

  },
  {
      title:"become a web developer in 10 mimits",
      views: "2m views",
      timestamp:"7 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/tbQZCPH/images6.jpg"

  }
  , {
      title:"become a web developer in 10 mimits",
      views: "3m views",
      timestamp:"8 days ago",
      channelImg:"https://i.ibb.co/F6jp222/mahabub.png",
      channel:"mahabub",
      image:"https://i.ibb.co/9rhf6wj/video.png"

  }
]

function VideoShow() {
  // const [details, setDetails] = useState([]);
  
  // useEffect(() => {
  //   // const uri = ''
  //   fetch(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBx76aD_W3OH3cQ4zvyn4hGS1uYcic7yT8&part=snippet,contentDetails,statistics,status`)
  //     .then((res) => res.json())
  //     .then((data) => setDetails(data.items[0]));
      
  // }, []);

  return (
    <div className="videoShow">
  
      <h2>Recommended</h2>
      <div className="videoShow_videos">
      {
        videoDescriptions.map( video => <VideoCard video={video}/>)
    }
      </div>
    </div>
  );
}

export default VideoShow;
