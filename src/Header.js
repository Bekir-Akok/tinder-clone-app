import React from 'react'
import './Header.css'
import logo from './img/indir copy.png'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header-icon" fontSize="large"/>
            </IconButton>
            <img 
            src={logo}
            alt="" className="header-logo"/>            
            <IconButton>
                <ForumIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header
