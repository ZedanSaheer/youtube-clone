import React from 'react'
import "./VideoRow.css"

const VideoRow = ({views , subs , description , timestamp ,channel ,title , image}) => {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                {channel} • <span className="videoRow__subsNumber">{subs} Subscribers</span> • {views} • {timestamp}
                </p>
                <p className="videoRow__desc">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
