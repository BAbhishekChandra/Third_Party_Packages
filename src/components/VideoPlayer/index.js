import ReactPlayer from 'react-player'

import './index.css'

// {/* Your code goes here */}

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://www.youtube.com/watch?v=32OpP0Z53yg" />
    </div>
  </div>
)

export default VideoPlayer
