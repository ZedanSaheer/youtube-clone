import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from '../src/redux/actions/auth.action'
import LoginIcon from '@mui/icons-material/Login';

const Header = ({ toggle }) => {

    const [menu, setMenu] = useState(false)

    const dispatch = useDispatch();

    const showMenu = () => {
        setMenu(value => !value)
    }

    const handleLogin = () => {
        dispatch(login())
    }
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className="menu-icon"
                    onClick={() => { toggle() }
                    }>
                    <MenuIcon />
                </div>
                <Link to="/"><img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" className="header__logo" /></Link>
            </div>
            <div className="header__search">
                <input type="search" placeholder="Search" className="header__search-input" />
                <SearchIcon className="header__search-icon" />
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__right-icon" />
                <AppsIcon className="header__right-icon" />
                <NotificationsIcon className="header__right-icon" />
                <div className="header__right-user">
                    <div className="header-right-user-avatar" onClick={() => showMenu()}>
                        <Avatar alt="name" className="header__avatar" />
                    </div>
                    {menu && (<div className="header__right-user-menu">
                        <div className="header-auth" onClick={() => handleLogin()}>
                            <LoginIcon />
                            <span class="header-auth-text">Sign in</span>
                        </div>
                        <div className="header-auth" onClick={() => handleLogout()}>
                            <LoginIcon />
                            <span class="header-auth-text">Sign out</span>
                        </div>
                    </div>)}
                </div>
                {/*   <div onClick={handleLogout}>
                    <Avatar alt="name" className="header__avatar" />
                </div> */}
            </div>
        </div>
    )
}

export default Header
