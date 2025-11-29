import React, { useState } from 'react';
import LikeButton from './LikeButton';
import HobbyInput from './HobbyInput';

function BioCard({ name, bioText, imageUrl, websiteUrl }) {
  // State for hobbies
  const [hobbies, setHobbies] = useState(["Coding", "Reading", "Hiking"]);

  return (
    <div className="bio-card">
      <img src={imageUrl} alt={`${name}'s profile`} className="bio-image" />
      <h2>{name}</h2>
      <p className="bio-text-content">{bioText}</p>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="website-link">
        Visit My Website
      </a>

      <div className="interactive-section">
        <LikeButton />
        <HobbyInput hobbies={hobbies} setHobbies={setHobbies} />
      </div>

      <div className="hobbies-list-section">
        <h3>My Hobbies:</h3>
        <ul className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BioCard;
