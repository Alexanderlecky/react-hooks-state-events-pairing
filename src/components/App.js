import React, { useState } from 'react';
import VideoDetail from './VideoDetail';
import CommentsSection from './CommentsSection';
import video from '../data/video.js'; // Correct the path to video.js

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => setUpvotes(upvotes + 1);
  const handleDownvote = () => setDownvotes(downvotes + 1);
  const toggleComments = () => setShowComments(!showComments);

  return (
    <div className="App">
      <VideoDetail video={video} onUpvote={handleUpvote} onDownvote={handleDownvote} />
      <CommentsSection comments={video.comments} showComments={showComments} toggleComments={toggleComments} />
    </div>
  );
}

export default App;
