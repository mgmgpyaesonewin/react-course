import React, { useState } from 'react';
import { Button } from './ui/button';

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(prevCount => prevCount + 1);
  };

  return (
    <div className="like-section">
      <Button onClick={handleLikeClick}>Like</Button>
      <span> ({likeCount})</span>
    </div>
  );
}

export default LikeButton;
