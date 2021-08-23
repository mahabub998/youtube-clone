import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import VideoShow from './../VideoShow/VideoShow';

function Home() {
    return (
        <div className="app_page">
            <Sidebar />
            <VideoShow />
        </div>
    )
}

export default Home
