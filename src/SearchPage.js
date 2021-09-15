import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'


const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon /><h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr />
            <VideoRow 
                 title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
                subs="695K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a .."
            />
            <VideoRow 
                 title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
                subs="695K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a .."
            />
            <VideoRow 
                 title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
                subs="695K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a .."
            />
            <VideoRow 
                 title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                channelImage="https://yt3.ggpht.com/_ZCAn1LoHREC4bgTiF8STDV9qLNA0Y_eDkztDBimDyG85lHtalFz6znIHczWipu0uJpFZTz81w=s88-c-k-c0x00ffffff-no-rj-mo"
                timestamp="4 days ago"
                views="2M views"
                channel="Clever Programmer"
                subs="695K"
                description="In this FREE LIVE training, Qazi & Sonny will show you how to build a .."
            />
        </div>
    )
}

export default SearchPage
