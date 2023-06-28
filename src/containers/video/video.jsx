import React from 'react';
import ReactPlayer from 'react-player';
import './video.css';

const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';

export default function Video() {
  return (
    <div className="eleviq__video section__margin">
        <div className="eleviq__video-container">
            <ReactPlayer
                url={VIDEO_PATH}
                controls={true}
                width="80vw"
                height="96vh"
            />
        </div>

    </div>
  );
}