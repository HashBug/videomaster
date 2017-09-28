import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';

class Video extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    let videos = {snippet: {title: '', thumbnails: {medium: {url: ''}}}, id: {videoId: ''}};
    videos = this.props.videos !== [] ? this.props.videos : videos;
    const opts = {  height: '240',
                    width: '240',
                    playerVars: {
                      autoplay: 0
                    }
                  };
    return(
      <div className="Video">
        {videos.map((video,k) => {
          console.log(video.id.videoId);
          if(video.id.videoId !== undefined){
            return (
              <YouTube
                videoId={video.id.videoId}
                opts={ opts }
                onReady={this._onReady}
                key={k}
                className="Youtube-player"
                />
            )
          }
          else {
            return (
              <div key={k} className="Track">
                <img
                alt="video"
                className="Video-thumb"
                src={video.snippet.thumbnails.medium.url}
                />
                <div className="Video-title">{video.snippet.title}</div>
              </div>
          )
        }
        })}
      </div>
    )
  }
}

export default Video;
