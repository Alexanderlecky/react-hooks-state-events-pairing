import React from 'react';

function DownvoteButton({ downvotes, onDownvote }) {
  return (
    <button onClick={onDownvote}>👎 {downvotes}</button>
  );
}

export default DownvoteButton;
