import React from 'react';
import CommentList from './CommentList'; // Ensure the file name and location are correct
import ToggleCommentsButton from './ToggleCommentsButton';

function CommentsSection({ comments, showComments, toggleComments }) {
  return (
    <div className="comments-section">
      <ToggleCommentsButton showComments={showComments} toggleComments={toggleComments} />
      {showComments && <CommentList comments={comments} />}
    </div>
  );
}

export default CommentsSection;
