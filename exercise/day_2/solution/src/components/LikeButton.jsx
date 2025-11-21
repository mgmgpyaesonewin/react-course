import React, { useState } from 'react';

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(prevCount => prevCount + 1);
  };

  return (
    <div className="like-section">
      <button onClick={handleLikeClick}>Like</button>
      <span> ({likeCount})</span>
    </div>
  );
}

export default LikeButton;
