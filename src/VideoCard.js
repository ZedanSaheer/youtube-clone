import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import request from './api'
import "./VideoCard.css"
import moment from 'moment'
import numeral from 'numeral'

const VideoCard = ({ video }) => {

    const { id, snippet: { channelId, channelTitle, title, publishedAt, thumbnails: { medium } } } = video

    useEffect(() => {
        const get_video_details = async () => {
            const {data:{items}} = await request('./videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id:id,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [id])

    useEffect(() => {
        const get_channel_icon = async () => {
            const {data:{items}} = await request('./channels', {
                params: {
                    part: 'snippet',
                    id:channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default.url)
        }
        get_channel_icon()
    }, [channelId])

    

    const [views,setViews]=useState(null);
    const [duration,setDuration]=useState(null);
    const [channelIcon , setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds*1000).format("mm:ss")

    return (
        <div className="videocard">
            <div className="video__thumbnail">
            <img src={medium.url} alt="" className="video__thumbnail" />
            <span className="video__thumbnail-duration">{_duration}</span>
            </div>
            <div className="video__info">
                <Avatar className="video__avatar" alt={channelId} src={channelIcon}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channelTitle}</p>
                    <p><span>{numeral(views).format("0.a")}</span> views • {moment(publishedAt).fromNow()}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
