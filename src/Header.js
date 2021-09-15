import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" className="header__logo" />
            </div>
            <div className="header__search">
                <input type="search" placeholder="Search" className="header__search-input" />
                <SearchIcon className="header__search-icon"/>
            </div>
            <div className="header__right">
                
                <VideoCallIcon className="header__right-icon"/>
                <AppsIcon className="header__right-icon"/>
                <NotificationsIcon className="header__right-icon"/>
                <Avatar alt="name" className="header__avatar"/>
            </div>
        </div>
    )
}

export default Header
