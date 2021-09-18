import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
import { useDispatch } from 'react-redux'
import { getPopularVideos } from './redux/actions/videos.action'

import InfiniteScroll from 'react-infinite-scroll-component'



const RecommendedVideos = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const fetchData = () => {
        dispatch(getPopularVideos())
    }

    const { videos } = useSelector(state => state.homeVideos)

    return (
        <div className="recommendedVideos__container">
            <div className="recommendedVideos">
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger mx-auto"></div>
                    }>
                    {videos?.map((video, id) => (<VideoCard video={video} key={video.id} />))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default RecommendedVideos
