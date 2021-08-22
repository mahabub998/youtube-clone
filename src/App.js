import React from 'react';
import "./App.css";
import Header from "./Copmonents/Header/Header";
import Sidebar from "./Copmonents/Sidebar/Sidebar";
import VideoShow from './Copmonents/VideoShow/VideoShow';

function App() {
  return (
    <div className="App">
      <Header />
     <div className="app_page">
     <Sidebar />
     <VideoShow />
     </div>
    </div>
  );
}

export default App;
