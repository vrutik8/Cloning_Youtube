import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);              
    const {snippet , statistics } = info;
    const {channelTitle , title , thumbnails } = snippet;
    console.log(snippet);
  return (
    <div className='p-2 m-2 w-72 shadow'>
        <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumberr" />
        <ul>
            {/* <li>{info}</li> */}
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewcount} views </li>
        </ul>
    </div> 
  )
}

export default VideoCard;