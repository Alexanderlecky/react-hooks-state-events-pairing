import React from 'react';

function ToggleCommentsButton({ showComments, toggleComments }) {
  return (
    <button onClick={toggleComments}>
      {showComments ? 'Hide Comments' : 'Show Comments'}
    </button>
  );
}

export default ToggleCommentsButton;
