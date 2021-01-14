import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import  {IconButton}  from '@material-ui/core';


const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons-repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons-left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarRateIcon className="swipeButtons-star" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swipeButtons-right" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="swipeButtons-lightning" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
