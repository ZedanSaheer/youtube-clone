import React,{useState} from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {

    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/"><img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" className="header__logo" /></Link>
            </div>
            <div className="header__search">
                <input type="search" placeholder="Search" className="header__search-input" onChange={(e)=> setInputSearch(e.target.value)}/>
              <Link to={`/search/${inputSearch}`}>  <SearchIcon className="header__search-icon"/></Link>
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
