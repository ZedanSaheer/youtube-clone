import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css"

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
    return (
        <div className="videocard">
            <img src={image} alt="" className="video__thumbnail" />
            <div className="video__info">
                <Avatar className="video__avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
