import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos__container">
            <h1>Recommended</h1>
            <div className="recommendedVideos">
            <VideoCard 
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
            />
            <VideoCard 
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
            />
            <VideoCard 
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
            />
            </div>
        </div>
    )
}

export default RecommendedVideos
