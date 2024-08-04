import React from 'react';
import Video from './Video'; // Import Video component from the same directory
import VideoInfo from './VideoInfo';

function VideoDetail({ video, onUpvote, onDownvote }) {
  return (
    <div className="video-detail">
      <Video src={video.embedUrl} />
      <VideoInfo 
        title={video.title} 
        views={video.views} 
        createdAt={video.createdAt} 
        description={video.description} 
        upvotes={video.upvotes} 
        downvotes={video.downvotes} 
        onUpvote={onUpvote} 
        onDownvote={onDownvote} 
      />
    </div>
  );
}

export default VideoDetail;
