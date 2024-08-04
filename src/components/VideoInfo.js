import React from 'react';
import UpvoteButton from './UpvoteButton';
import DownvoteButton from './DownvoteButton';

function VideoInfo({ title, views, createdAt, description, upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div className="video-info">
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <p>{description}</p>
      <UpvoteButton upvotes={upvotes} onUpvote={onUpvote} />
      <DownvoteButton downvotes={downvotes} onDownvote={onDownvote} />
    </div>
  );
}

export default VideoInfo;
