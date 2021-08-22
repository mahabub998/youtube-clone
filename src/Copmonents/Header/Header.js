import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
      </div>
      <div className="header_input">
        <input type="text" placeholder="Search"></input>
        <SearchIcon className="header-inputButton" />
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icons"/>
        <AppsIcon />
        <NotificationsIcon className="header_icons" />
        {/*this is avatar*/}
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
