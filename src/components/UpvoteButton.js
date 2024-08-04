import React from 'react';

function UpvoteButton({ upvotes, onUpvote }) {
  return (
    <button onClick={onUpvote}>👍 {upvotes}</button>
  );
}

export default UpvoteButton;
