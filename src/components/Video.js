import React from 'react';

function Video({ src }) {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allowFullScreen
        title="video"
      />
    </div>
  );
}

export default Video;
